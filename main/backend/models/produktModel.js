const mongoose = require('mongoose');

const produktSchema = new mongoose.Schema({
    nazwa: { type: String, required: true },
    kategoria: { type: String, required: true },
    cena: { type: Number, required: true },
    zdj: {type: String, required: false},
});

const Produkt = mongoose.model('Produkt', produktSchema);
module.exports = Produkt;