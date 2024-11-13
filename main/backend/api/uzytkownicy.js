const express = require('express');
const router = express.Router();
const Uzytkownik = require('../models/uzytkownikModel');

router.post('/rejestracja', async (req, res) => {
    const { email, haslo } = req.body;
    const nowyUzytkownik = new Uzytkownik({ email, haslo });
    await nowyUzytkownik.save();
    res.status(201).send("Użytkownik zarejestrowany");
});

router.post('/logowanie', async (req, res) => {
    const { email, haslo } = req.body;
    const uzytkownik = await Uzytkownik.findOne({ email });
    if (uzytkownik && uzytkownik.haslo === haslo) {
        res.send("Zalogowano");
    } else {
        res.status(401).send("Nieprawidłowe dane logowania");
    }
});

module.exports = router;