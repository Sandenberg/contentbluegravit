const mongoose = require('mongoose');
const User = require('./models/userModel');
const Content = require('./models/contentModel');
const Rating = require('./models/ratingModel');
const bcrypt = require('bcryptjs');
const faker = require('faker');

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/content_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
  console.log('Connected to the database');

  // Limpar coleções existentes
  await User.deleteMany({});
  await Content.deleteMany({});
  await Rating.deleteMany({});

  // Criar usuários de exemplo
  const users = [];
  const userPromises = [];

  for (let i = 0; i < 5; i++) {
    const hashedPassword = await bcrypt.hash('password123', 10);
    const user = new User({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: hashedPassword,
    });
    users.push(user);
    userPromises.push(user.save());
  }

  await Promise.all(userPromises);

  // Criar conteúdos de exemplo
  const contentPromises = [];
  const categories = ['game', 'video', 'artwork', 'music'];

  for (let i = 0; i < 20; i++) {
    const content = new Content({
      title: faker.lorem.words(),
      description: faker.lorem.sentences(),
      category: categories[Math.floor(Math.random() * categories.length)],
      thumbnail_url: faker.image.imageUrl(),
      content_url: faker.internet.url(),
      createdAt: faker.date.past(),
      user: users[Math.floor(Math.random() * users.length)]._id,
    });
    contentPromises.push(content.save());
  }

  await Promise.all(contentPromises);

  // Criar avaliações de exemplo
  const ratingPromises = [];

  for (let i = 0; i < 20; i++) {
    const rating = new Rating({
      rating: Math.floor(Math.random() * 5) + 1,
      user: users[Math.floor(Math.random() * users.length)]._id,
      content: (await Content.findOne().skip(Math.floor(Math.random() * 20)).exec())._id,
    });
    ratingPromises.push(rating.save());
  }

  await Promise.all(ratingPromises);

  console.log('Database populated with example data');
  mongoose.connection.close();
});
