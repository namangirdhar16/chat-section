const express = require('express');
const router = new express.Router();

router.get('/',(req,res) => {
    res.send('hello this is from the router!')
})

module.exports = router ;