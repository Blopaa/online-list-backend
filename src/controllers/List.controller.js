import List from "../models/Lists";
import User from "../models/User";

export const getLists = async (req, res) => {
  const lists = await List.find();
  res.json(lists);
};

export const createList = async (req, res) => {
  const { name, fields, users } = req.body;
  const list = new List({
    name,
    fields,
    users,
    author: req.userId,
  });
  const listSaved = await list.save();
  res.status(201).json(listSaved);
};

export const updateListById = async (req, res) => {
  const list = await List.findByIdAndUpdate(req.params.listId, req.body, {
    new: true,
  });

  res.json(list);
};

export const deleteListById = async (req, res) => {
  await List.findByIdAndDelete(req.params.listId);
  res.json("deleted successfully");
};

export const addUserList = async (req, res) => {
  const userEmail = req.params.userEmail;
  const listId = req.params.listId;
  const user = await User.findOne({ email: userEmail });
  if (!user) return res.status(404).json({ message: "user not found" });

  const list = await List.findById(listId);
  if(!list) return res.status(404).json({message: 'list not found'})
  const allUsers = list.users;
  const userAuthor = list.author

  const userExits = await allUsers.includes(user._id)
  const userAsAuthor = await userAuthor.includes(user._id)
  if(userExits) return res.status(400).json({message: "user alredy added"})
  if(userAsAuthor) return res.status(400).json({message: "user alredy added as Author"})

  const newList = await List.findByIdAndUpdate(
    listId,
    { users: [...allUsers, user._id.toString()] },
    { new: true }
  );
  res.json(newList);
};
