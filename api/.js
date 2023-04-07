const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const key = process.env.JWT_SECRET;

const { User } = require('../database.js');

const getUsers = async (req, res) => {
  const { name } = req.query;
  let users;
  if (name) {
    users = await User.findAll({
      where: {
        name: {
          [Op.like]: `%${name}`,
        },
      },
    });
  } else {
    users = await User.findAll();
  }
  res.json(users);
};

const getUsersById = async () => {};

const users = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email: email } });

    if (existingUser) {
      const match = await bcrypt.compare(password, existingUser.password);

      if (!match) {
        return res.status(401).json({ message: 'The password is incorrect.' });
      }

      const token = jwt.sign({ id: existingUser.id }, key, {
        expiresIn: '12h',
      });

      const data = {
        id: existingUser.id,
        username: existingUser.username,
        name: existingUser.name,
        email: existingUser.email,
        token,
      };

      return res.status(200).json({ message: 'Successful login', data });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        name,
        username,
        email,
        password: hashedPassword,
      });

      return res.status(201).json({ message: 'Successful register' });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Incorrect credentials' });
  }
};
