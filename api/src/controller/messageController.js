const {
  Ad,
  Category,
  Favorite,
  Message,
  Rating,
  Report,
  User,
} = require('../database');

const {transporter} = require("../middleware/nodemailer.js");

const ask = async (req, res) => {
  const { userId, message, adId } = req.body;
  try {

    const ad = await Ad.findByPk(adId);
    
    const user = await User.findByPk(ad.UserId);

    const newMessage = await Message.create({
      UserId: userId,
      AdId: adId,
      message: message,
    });

    await transporter.sendMail({
      from: "vizta <storevizta@gmail.com>",
      to: user.email,
      subject: `You have a message in the ${ad.title} advertisement`,
      text: `You have a message in the ${ad.title} advertisement. Please respond as soon as possible.`
    });

    res.status(200).json(newMessage);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

const response = async (req, res) => {
  const { messageId, response } = req.body;
  try {
    const actualMessage = await Message.findOne({ where: { id: messageId } });

    const user = await User.findByPk(actualMessage.UserId);

    actualMessage.update({
      response: response,
    });
    
      await transporter.sendMail({
      from: "vizta <storevizta@gmail.com>",
      to: user.email,
      subject: `They replied to your message in the ${actualMessage.title} advertisement`,
      text: `They replied to your message in the ${actualMessage.title} advertisement`
    });

    res.status(200).json(actualMessage);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error);
  }
};

const getMessages = async (req,res) => {
  try {
    const messages = await Message.findAll();
    res.status(200).send(messages)
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const getMessageById = async (req,res) => {
  const {id} = req.params;

  if(!id){
    res.status(404).send("Error: Id is required");
  }
  try {
    const message = await Message.findByPk(id);
    if(!message){
      res.status(404).send("Error: There is no message with the entered ID")
    }
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  ask,
  response,
  getMessages,
  getMessageById
};
