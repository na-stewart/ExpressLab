const express = require('express');
const router = express.Router();


router.get('/users', (req, res) => {
    res.send("Users")
})

router.get('/new-users', (req, res) => {
    res.send("New Users")
})

router.get('/:id', (req, res) => {
    res.send(`Getting user data: ${res.params.id}`)
}).delete((res, req) => {
    res.send(`Deleting user data: ${res.params.id}`)
}).put((res, res) => {
    res.send(`Updating user data: ${res.params.id}`)
})
const users = [{name: "George"}, {name: "Justyna"}]
router.param("id", (req, res, next, id) => {
    console.log(`Accessing user #${id}`)
    next();
})

module.exports = router;