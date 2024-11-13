const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Uzytkownik = require('./models/uzytkownikModel');
const Produkt = require('./models/produktModel');

dotenv.config();
const app = express();
app.use(cors());    
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.post('/api/rejestracja', async (req, res) => {
    const { email, haslo } = req.body;
    const nowyUzytkownik = new Uzytkownik({ email, haslo });
    await nowyUzytkownik.save();
    res.status(201).send("Użytkownik zarejestrowany");
});

app.post('/api/logowanie', async (req, res) => {
    const { email, haslo } = req.body;
    const uzytkownik = await Uzytkownik.findOne({ email });
    if (uzytkownik && uzytkownik.haslo === haslo) {
        res.send("Zalogowano");
    } else {
        res.status(401).send("Nieprawidłowe dane logowania");
    }
});

app.get('/api/produkty', async (req, res) => {
    try {
        const produkty = await Produkt.find();
        res.json(produkty);
    } catch (error) {
        res.status(500).send("Błąd serwera");
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));