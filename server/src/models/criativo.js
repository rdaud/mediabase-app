const mongoose = require('mongoose')
const validator = require('validator')
const Campaign = require('./campaign')



/**
 * Create Criativo
 */

const criativoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    imagem: {
        type: Buffer,
        required: true
    },
    descricao: {
        type: String,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    campaign: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Campaign'
    },
}, {
    timestamps: true,
})

// Delete user tasks when user is removed
criativoSchema.pre('remove', async function(next) {
    const user = this
    await Campaign.deleteMany({ criativos: user._id })
    next()
})


const Criativo = mongoose.model('Criativo', criativoSchema, 'criativos')


module.exports = Criativo