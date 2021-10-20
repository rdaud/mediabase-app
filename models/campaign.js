const mongoose = require('mongoose')
const validator = require('validator')


/**
 * Create Campaign
 */

const campaignSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cliente: {
        type: String,
        required: true
    },
    produto: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    dataDeVeiculacaoInicio: {
            type: Date,
            required: true
    },
    dataDeVeiculacaoFim: {
        type: Date,
        required: true
    },
    formatos: {
        type: Array
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Campaign = mongoose.model('Campaign', campaignSchema
)


module.exports = Campaign