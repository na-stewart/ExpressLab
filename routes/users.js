const express = require('express');
const router = express.Router(); 
const users =[
    {
        firstName:"George",
        lastName:"Salayka",
        age:40,
        gender:"Male",
    },
    {
        firstName:"George",
        lastName:"Salayka",
        age:40,
        gender:"Male",
    },
    {
        firstName:"George",
        lastName:"Salayka",
        age:40,
        gender:"Male",
    },
    {
        firstName:"George",
        lastName:"Salayka",
        age:40,
        gender:"Male",
    }
];


router.get('/', (req, res)=>{
    res.render(`users/list`, {users:users})
});
router.get('/new', (req, res)=>{
    res.render('users/new', {firstName: ""});
});


router.post('/', (req, res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const gender = req.body.gender;
    users.push({
        firstName:firstName,
        lastName:lastName,
        gender:gender,
        age:age, //trailing comma
    });
    res.send("User Created!");
});


router.route("/:id").get((req, res)=>{
 	res.send(`Getting User data: ${req.params.id}`);
}).delete((req, res)=>{
    res.send(`Deleting user with id: ${req.params.id}`);
}).put((req, res)=>{
    res.send(`Updating user with id: ${req.params.id}`);
});


router.param("id", (req, res, next, id)=>{
    console.log(`Accessing user with id #${id}`);
    next();
});


module.exports = router;