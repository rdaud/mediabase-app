const express = require('express')
const Campaign = require('../models/campaign')
const router = new express.Router()
const auth = require('../middleware/auth')

/**
 * Campaigns
 */


// Create Campaign
router.post('/campaigns', auth, async (req,res) => {
    
    const campaign = new Campaign({
        ...req.body,
        owner: req.user._id
    })


    try {
        await campaign.save()
        res.status(201).send(campaign)
    } catch (e) {
        res.status(400).send(e)
    }

})

// Update Campaign
router.patch('/campaigns/:id',auth, async(req,res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ['nome','cliente','campanha','status','dataDeVeiculacao']
    const isValidOperation = updates.every( update => allowedUpdates.includes(update) )

    if (!isValidOperation) {
        res.status(404).send('Error: Invalid update')
    }

    try {
        // Find by ID
        // const _id = req.params.id
        // const campaign = await Campaign.findByIdAndUpdate(_id)
        // Find campaigns by Owner
        const campaign = await Campaign.findOne({ _id: req.params.id, owner: req.user._id})

        if (!campaign) {
            return res.status(404).send()
        }

        updates.forEach(update => campaign[update] = req.body[update])
        await campaign.save()
        res.send(campaign)

    } catch (e) {
        res.status(400).send()
    }

})

// GET /campaigns
router.get('/campaigns', auth, async (req,res) => {

    const match = {}
    // const sort = {}

    if (req.query.status) {
        match.status = req.query.status
    }

    // if (req.query.sortBy) {
    //     const parts = req.query.sortBy.split(':')
    //     sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    // }

    try {

        await req.user.populate({
            path: 'campaigns',
            // match,
            // options: {
            //     limit: parseInt(req.query.limit),
            //     skip: parseInt(req.query.skip),
            //     sort
            // }
        })
        res.send(req.user.campaigns)

    } catch (e) {
        res.status(500).send(e)
    }

})

// Read Campaign by ID
router.get('/campaigns/:id', auth, async (req,res) => {

    const _id = req.params.id

    try {
        const campaign = await Campaign.findOne({ _id, owner: req.user._id })
        if (!campaign) {
            return res.status(404).send()
        }
        res.send(campaign)
    } catch (e) {
        res.status(500).send()
    }

})

// Delete Campaign
router.delete('/campaigns/:id', auth, async (req,res) => {

    try {
        const campaign = await Campaign.findOneAndDelete({ _id: req.params.id,owner: req.user._id })

        if (!campaign) {
            return res.status(404).send()
        }
        res.send(campaign)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router