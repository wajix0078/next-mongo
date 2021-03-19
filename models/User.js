const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'Please enter your name'],
        unique: false,
        trim: true,
        maxLength: [40, 'Name cannot be more than 20 chars']
    },
    pageDetail: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        maxLength: [400, 'Name cannot be more than 400 chars']
    }
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);


