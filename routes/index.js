const express = require('express')
const router = express.Router()
const User = require('../models/User')

// Add new user route
router.post('/', (req, res) => {
    // User.sync({force: true}).then(function () {
    // // Table created
    //     return User.create({
    //         firstName: req.body.firstName,
    //         lastName: req.body.lastName
    //     });
    // })
    // .then(() => {console.log('user added')});
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    .then(user => {
        console.log('new user added')
        res.redirect('/')
    })
})

// Index route
router.get('/', (req, res) => {
    User.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
    .then(users => {
        res.render('index', {users});
    })
});

// Delete route
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.destroy())
    res.redirect('/')
})

module.exports = router