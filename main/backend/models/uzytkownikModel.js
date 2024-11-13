const mongoose = require('mongoose');

const uzytkownikSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    haslo: { type: String, required: true }
});

const Uzytkownik = mongoose.model('Uzytkownik', uzytkownikSchema);
module.exports = Uzytkownik;