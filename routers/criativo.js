const express = require('express')
const Criativo = require('../models/criativo')
const Campaign = require('../models/campaign')
const router = new express.Router()
const auth = require('../middleware/auth')
const multer = require('multer')


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

// Create Criativo
router.post('/campaigns/:id/criativos', auth, upload.single('imagem'), async (req,res) => {
    
    const file = req.file

    const criativo = new Criativo({
        ...req.body,
        imagem: req.file.buffer,
        owner: req.user._id,
        campaign: req.params.id,
    })

    try {

        const campaign = await Campaign.findOne({ _id: req.params.id, owner: req.user._id})
        
        if (!campaign) {
            return res.status(404).send()
        }
             
        await criativo.save()
        res.status(201).send(criativo)
    } catch (e) {
        res.status(400).send(e)
    }

})

// Get Criativos
router.get('/criativos/:id', auth, async (req,res) => {

    try {

        const criativos = await Criativo.find({ campaign: req.params.id})

        if (!criativos) {
            return res.status(404).send()
        }

        res.send(criativos)

    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }

})

// Get Criativo by ID
router.get('/criativo/:id', auth, async (req,res) => {

    try {

        const criativo = await Criativo.findById({ _id: req.params.id})

        if (!criativo) {
            return res.status(404).send()
        }

        res.send(criativo)

    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }

})

// Read Image
router.get('/criativo/imagem/:id', async (req,res) => {
    
    try {
        const criativo = await Criativo.findById(req.params.id)
        if (!criativo) {
            throw new Error()
        }
        res.set('Content-Type', 'image/jpg')
        
        res.send(criativo.imagem)
    } catch (e) {
        res.status(400).send(e)
    }

})

// Delete image
router.delete('/criativos/:id', auth, async (req,res) => {
    try {
        const criativo = await Criativo.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
        if (!criativo) {
            return res.status(404).send()
        }
        res.send(criativo)
    } catch (e) {
        res.status(500).send()
    }

})

// Update Criativo
router.patch('/criativos/:id',auth, upload.single('imagem'), async(req,res) => {

    const updates = Object.keys(req.body).concat(req.file.fieldname)
    const allowedUpdates = ['nome','imagem','descricao']
    const isValidOperation = updates.every( update => allowedUpdates.includes(update) )

    console.log(updates)

    if (!isValidOperation) {
        res.status(404).send('Error: Invalid update')
    }

    try {

        const criativo = await Criativo.findOne({ _id: req.params.id })

   
        if (!criativo) {
            return res.status(404).send()
        }

        updates.forEach(update => {
            if (update === "imagem") {
                return criativo[update] = req.file.buffer
            }
            return criativo[update] = req.body[update]

        })
        await criativo.save()
        res.send(criativo)

    } catch (e) {
        res.status(400).send()
    }

})



module.exports = router


