const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required:true
        },
        password: {
            type: String,
            required: true,
        },
        // nikeName: {
        //     type: String,
        //     required: true,
        // },
    }
)


const user = mongoose.model('user', userSchema);

module.exports = user;