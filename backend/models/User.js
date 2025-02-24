const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userSchema =  new mongoose.Schema({
    fullname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long']
        },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: [5, 'Email must be at least 5 characters long']
    },
    password: {
        type: String,
        required: true,
        select: false,
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id : this._id}, process.env.JWT_SECRET, { expiresIn: '24h'})
    return token
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10)
}


userSchema.methods.comparePassword = async function(password){
  return await bcrypt.compare(password, this.password)
  
}

const userModel = mongoose.model('user', userSchema)

module.exports = userModel