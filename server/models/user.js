const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { APP_URL } = require('../config')

const userinfoSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    followers: [{ type: Schema.Types.ObjectId, ref: 'Userinfo' }],
    following: [{ type: Schema.Types.ObjectId, ref: 'Userinfo' }],
    joinDate: { type: Date, default: Date.now },
    bio: { type: String },
    tweets: [{ type: Schema.Types.ObjectId, ref: 'Tweet' }],
    profileImage: { type: String, get: (image)=>{
        const imageUrl = image.replace(/\\/g, '/');
        return `${APP_URL}/${imageUrl}`;
    }},
    coverImage: { type: String, get: (image)=>{
        const imageUrl = image.replace(/\\/g, '/');
        return `${APP_URL}/${imageUrl}`;
    }}
}, { timestamps: true, toJSON: { getters: true}, toObject: { getters: true } });

module.exports = mongoose.model('Userinfo', userinfoSchema, 'userinfos');