import User from "../models/User";
import List from "../models/Lists";
import jwt from "jsonwebtoken";

export const signIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email });
  if (!userFound) return res.status(404).json({ message: "User not found :(" });

  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );
  if (!matchPassword)
    return res.status(401).json({ token: null, message: "invalid password" });

  console.log(userFound);
  const token = jwt.sign({ id: userFound._id }, process.env.SECRET, {
    expiresIn: 172800,
  });

  res.json({ token });
};

export const getUsers = async (req, res) => {
  const user = await User.find();
  res.json(user);
};

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  const savedUser = await user.save();
  const token = jwt.sign({ id: savedUser._id }, process.env.SECRET, {
    expiresIn: 172800,
  });
  console.log(savedUser);

  res.json({ token });
};

export const getUserById = async (req, res) => {
  const userId = req.params.userId
  const user = await User.findById(userId)
  if(!user) return res.status(404).json({mesasge: "user not found"})
  res.json(user)
}

export const getUserList = async (req, res) => {
  const user = await User.findById(req.userId, {password: 0})
  if(!user) return res.status(500).json({message: "user not found"})
  const listsAsUser = await List.find({ users: [req.userId] });
  const listsAsAuthor = await List.find({ author: req.userId });
  res.json({user, listsAsUser, listsAsAuthor });
};
