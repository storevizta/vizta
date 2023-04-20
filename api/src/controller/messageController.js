const {
  Ad,
  Category,
  Favorite,
  Message,
  Rating,
  Report,
  User,
} = require('../database');

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
    res.status(400).json(error.messa);
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
