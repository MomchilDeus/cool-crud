const express = require('express')
const router = express.Router()
const User = require('../models/User')

// Edit user route
// @TODO add verification
router.post('/:id', (req, res) => {
    User.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }, { where : { id: req.params.id }
    })
    .then(result => {
        console.log(`result`, result)
        res.redirect('/')
    })
    .catch(err => {
        console.log(`err`, err)
    })
})

module.exports = router