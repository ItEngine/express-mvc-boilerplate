'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    username: {type: String, required: true, index: { unique: true } },
    email: {type: String, required: true, index: { unique: true } },
    name: {type: String, required: true},
    surname: {type: String, required: true},
    company: {type: String, required: true},
    password: {type: String, required: true},
    is_admin: {type: Boolean},
    payment: {type: Boolean},
    expires: { type: Date, default: Date.now }
});

module.exports = mongoose.model('user', User);
