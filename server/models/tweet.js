const mongoose = require('mongoose');
const { APP_URL } = require('../config')
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
    content : { type: String, required: 'true'},
    image: { type: String, get: (image)=>{
        const imageUrl = image.replace(/\\/g, '/');
        return `${APP_URL}/${imageUrl}`;
    }},
    postDate: { type: Date, default: Date.now },
    userID: { type: Schema.Types.ObjectId, ref: 'Userinfo' }
}, { timestamps: true, toJSON: { getters: true}, toObject: { getters: true } })

module.exports = mongoose.model('Tweet', tweetSchema, 'tweets');