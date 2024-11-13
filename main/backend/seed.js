// backend/seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Produkt = require('./models/produktModel');

// Wczytaj zmienne środowiskowe
dotenv.config();

// Połączenie z MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB connected");
    seedProdukty();
})
.catch(err => console.log("Błąd połączenia z MongoDB:", err));

const seedProdukty = async () => {
    const produkty = [
        { nazwa: 'Pizza', kategoria: 'Dania główne', cena: 25 },
        { nazwa: 'Lody', kategoria: 'Desery', cena: 10 },
        { nazwa: 'Sok pomarańczowy', kategoria: 'Napoje', cena: 8 },
    ];

    await Produkt.deleteMany({}); // Usuwa istniejące dane
    await Produkt.insertMany(produkty); // Dodaje nowe dane
    console.log("Dane zostały załadowane");
    mongoose.connection.close();
};