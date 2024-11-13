
// backend/api/produkty.js
const express = require('express');
const router = express.Router();
const Produkt = require('../models/produktModel');

// Endpoint do pobierania produktów
router.get('/', async (req, res) => {
    try {
        const produkty = await Produkt.find();
        res.json(produkty);
    } catch (error) {
        res.status(500).send("Błąd serwera");
    }
});

module.exports = router;
