const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  email: { type: String, required: true, index: { unique: true } },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  password: { type: String, required: true },
  isSuperAdmin: { type: Boolean, required: true },
});

module.exports = mongoose.model('user', User);
