const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const auth = require('../middleware/auth')
const multer = require('multer')
const { restart } = require('nodemon')

/**
 * Users
 */

// Create User
router.post('/users', async (req,res) => {
    
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user,token})
    } catch (e) {
        res.status(400).send(e)
    }

})

// Login User
router.post('/users/login', async (req,res) => {
    try {
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthToken()
        res.send({user,token})
    } catch (e) {
        res.status(400).send()
    }
})

// Logout User
router.post('/users/logout', auth, async(req,res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.status(201).send()
    } catch (e) {
        res.status(500).send()
    }
} )

// Logout User of All Sessions
router.post('/users/logoutAll', auth, async(req,res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
} )


// Update Profile
router.patch('/users/me', auth, async (req,res) => {
    
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(404).send('Error: Invalid update')
    }

    try {
        updates.forEach(update => req.user[update] = req.body[update])
        await req.user.save()

        res.send(req.user)

    } catch (e) {
        res.status(400).send(e)
    }

})

// Read Profile
router.get('/users/me', auth, async (req,res) => {

  res.send(req.user)

})

// Delete User
router.delete('/users/me', auth, async (req,res) => {
    try {
        await req.user.remove()
        res.send(req.user)

    } catch (e) {
        res.status(500).send()
    }
})

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req,file,cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/)) {
            return cb(new Error('Por favor, envie apenas arquivos no formato jpg ou png.'))
        }
        cb(undefined,true)
    }
})


// Upload avatar image
router.post('/users/me/avatar', auth, upload.single('avatar'), async (req,res) => {
    req.user.avatar = req.file.buffer
    await req.user.save()
    res.send()
}, (error,req,res,next) => {
    res.status(400).send({ error: error.message })
})

// Read avatar image
router.get('/users/:id/avatar', auth, async (req,res) => {
    try {
        const user = await User.findById(req.params.id)

        if (!user || !user.avatar) {
            throw new Error()
        }

        res.set('Content-Type', 'image/jpg')
        res.send(user.avatar)
        
    } catch (e) {
        res.status(404).send()
    }
})

// Delete avatar image
router.delete('/users/me/avatar', auth, async (req,res) => {
    req.user.avatar = undefined
    await req.user.save()
    res.send()
})


module.exports = router