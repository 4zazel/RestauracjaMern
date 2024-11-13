const express = require('express');
const router = express.Router();
const Produkt = require('../models/produktModel');

router.get('/', async (req, res) => {
    try {
        const produkty = await Produkt.find();
        res.json(produkty);
    } catch (error) {
        res.status(500).send("Błąd serwera");
    }
});

module.exports = router;
