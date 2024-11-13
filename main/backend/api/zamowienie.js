const express = require('express');
const router = express.Router();

router.post('/zamowienie', async (req, res) => {
    const { koszyk } = req.body;
    const noweZamowienie = new zamowienie( koszyk );
    await noweZamowienie.save();
    res.status(201).send("Złożono zamowienie");
})

module.exports = router;