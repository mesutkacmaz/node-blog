const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);
