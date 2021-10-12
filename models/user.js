const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Campaign = require('./campaign')

/**
 * Create User
 */

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('O email informado está formatado incorretamente.')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 6
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]   
},
{
    timestamps: true
})

//
userSchema.virtual('campaigns', {
    ref: 'Campaign',
    localField: '_id',
    foreignField: 'owner'
})

// Delete user tasks when user is removed
userSchema.pre('remove', async function(next) {
    const user = this
    await Campaign.deleteMany({ owner: user._id })
    next()
})

// Generate Authorization Token
userSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({ _id: user._id.toString()},'woodyallenisthebestdirector')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

// Public Profile
userSchema.methods.toJSON = function() {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}


// Validate user credentials
userSchema.statics.findByCredentials = async (email,password) => {
    
    // 1st find the user by email
    const user = await User.findOne({ email })


    // 2nd check if this user exist
    if (!user) {
        throw new Error('Unable to login')
    }

    // 3rd check if the password provided matches with the stored one
    const isMatch = await bcrypt.compare(password,user.password)


    if (!isMatch) {
        throw new Error('Unable to login')
    }

    // 4th return the user if everything was validated
    return user
}

// Hash the plain text password before saving
userSchema.pre('save', async function(next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password,8)
    }

    next()
})

const User = mongoose.model('User',userSchema)


module.exports = User