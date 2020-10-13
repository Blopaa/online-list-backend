import List from "../models/Lists";

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
  });
  const listSaved = await list.save()
  res.status(201).json(listSaved)
};

export const updateListById = async(req, res) => {
    const list = await List.findByIdAndUpdate(req.params.listId, req.body, {
        new: true
    })

    res.json(list)
}

export const deleteListById = async (req, res) => {
    await List.findByIdAndDelete(req.params.listId)
    res.json('deleted successfully')
}