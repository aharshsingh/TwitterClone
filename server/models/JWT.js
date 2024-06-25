const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accessTokenSchema = new Schema({
    token: { type: String, unique: true }
}, { timestamps: false });

module.exports = mongoose.model('AccessToken', accessTokenSchema, 'accessTokens');
