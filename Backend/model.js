const mongo = require('mongoose');

const userSchema = new mongo.Schema({
    name: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    sleep: {
        type: String,
        enum: ['early', 'late'],   // restrict values ✅
        required: true
    },
    smoking: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

module.exports = mongo.model('User', userSchema);