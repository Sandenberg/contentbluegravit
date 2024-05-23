const Rating = require('../models/ratingModel');
const Content = require('../models/contentModel');

exports.rateContent = async (req, res) => {
  const { contentId, rating , userId} = req.body;

  try {
    const content = await Content.findById(contentId);
    if (!content) {
      return res.status(404).json({ msg: 'Content not found' });
    }

    let userRating = await Rating.findOne({ user: userId, content: contentId });
    if (userRating) {
      userRating.rating = rating;
      await userRating.save();
      return res.json(userRating);
    }

    userRating = new Rating({
      user: userId,
      content: contentId,
      rating
    });

    await userRating.save();
    res.json(userRating);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
