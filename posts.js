const express = require('express');
const router = express.Router();


router.get('/posts', (req, res) => {
    res.send("All posts.")
})

router.get('/new-posts', (req, res) => {
    res.send("New posts.")
})

module.exports = router;