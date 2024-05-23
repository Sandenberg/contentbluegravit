const Content = require('../models/contentModel');

exports.createContent = async (req, res) => {
  const { title, description, category, thumbnail_url, content_url } = req.body;

  try {
    const newContent = new Content({
      title,
      description,
      category,
      thumbnail_url,
      content_url,
    });

    const content = await newContent.save();
    res.json(content);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getContents = async (req, res) => {
  try {
    const contents = await Content.find().populate('user', ['username']);
    res.json(contents);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateContent = async (req, res) => {
  const { title, description, category, thumbnail_url, content_url } = req.body;

  try {
    let content = await Content.findById(req.params.id);

    if (!content) {
      return res.status(404).json({ msg: 'Content not found' });
    }

    content = await Content.findByIdAndUpdate(req.params.id, { $set: { title, description, category, thumbnail_url, content_url } }, { new: true });

    res.json(content);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteContent = async (req, res) => {
  try {
    let content = await Content.findById(req.params.id);

    if (!content) {
      return res.status(404).json({ msg: 'Content not found' });
    }

    await Content.findByIdAndDelete(req.params.id);

    res.json({ msg: 'Content removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
