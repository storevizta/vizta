const {
  Ad,
  Category,
  Favorite,
  Message,
  Rating,
  Report,
  User,
} = require('../database');

const createRating = async (req, res) => {
  const { rating, comment, userId } = req.body;

  const user = await User.findByPk(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  try {
    if (rating && comment) {
      const newRating = await Rating.create({
        rating: rating,
        comment: comment,
        UserId: user.id,
      });
      return res.status(200).json(newRating);
    } else {
      res.status(400).json('Please provide a rating and a comment');
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getRatingById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json('Missing id');
  }

  const rating = await Rating.findByPk(id);

  try {
    if (rating) {
      res.status(200).json(rating);
    } else {
      return res.status(404).json('The rating does not exist');
    }
  } catch (error) {
    res.status(400).json(error.menssage);
  }
};

const getRatingByUser = async (req, res) => {
  const { userId } = req.body;
  console.log(userId);
  if (!userId) {
    return res.status(400).json('Missing User Id');
  }
  try {
    const user = await User.findOne({
      where: { id: userId },
      include: { model: Rating },
    });
    res.status(200).json(user.Rating);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteRating = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'Missing Id' });
  }

  const rating = await Rating.findByPk(id);

  try {
    if (rating) {
      await rating.destroy();
      res.status(200).json('The rating was successfully deleted.');
    } else {
      return res.status(404).json('The rating does not exist');
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateRating = async (req, res) => {
  const { id } = req.params;

  const { rating, comment } = req.body;

  const actualRating = await Rating.findByPk(id);

  try {
    if (actualRating) {
      const modifyRating = await actualRating.update({
        rating: rating,
        comment: comment,
      });
      return res.status(200).json(modifyRating);
    } else {
      res.status(400).json('Please provide a rating and a comment');
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createRating,
  getRatingById,
  getRatingByUser,
  deleteRating,
  updateRating,
};
