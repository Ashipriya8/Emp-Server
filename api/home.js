const express = require('express');

const router = express.Router();

router.get('/',(req, res)=> {
    res.send(
        "<h1>Welcome to Iwin Life. Please Be patient as we are still ..</h1>"
    )
})

module.exports = router