const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel',
    required: true,
  },
  content: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'contentModel',
    required: true,
  },
}, {
  timestamps: true,
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
