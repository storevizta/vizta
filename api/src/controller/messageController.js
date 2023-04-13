const { Message, Ad, User } = require('../database');

const ask = async (req, res) => {
  const { userId, message, adId } = req.body;
  try {
    const newMessage = await Message.create({
      UserId: userId,
      AdId: adId,
      message: message,
    });

    res.status(200).json(newMessage);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error);
  }
};

const response = async (req, res) => {
  const { messageId, response } = req.body;
  try {
    const actualMessage = await Message.findOne({ where: { id: messageId } });
    actualMessage.update({
      response: response,
    });
    res.status(200).json(actualMessage);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error);
  }
};

const searchMessageAd = async (req, res) => {
  const { adId } = req.body;
  const ad = await Ad.findOne({
    where: { id: adId },
    include: { model: Message },
  });
  res.json(ad.Messages);
};

const searchMessageUser = async (req, res) => {
  const { userId } = req.body;
  const user = await User.findOne({
    where: { id: userId },
    include: { model: Message },
  });
  res.json(user.Messages);
};

module.exports = {
  ask,
  response,
  searchMessageAd,
  searchMessageUser,
};
