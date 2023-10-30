import fs from "fs";
import User from "../models/user.model.js";
export const getUserDetail = async (req, res) => {
  const { userId } = req.params;
  try {
    // console.log(path.resolve(__dirname, '../mock/user.mock.json'))
    const data = await User.findById(userId);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const createtUserDetail = async (req, res) => {
  const userData = req.body;
  try {
    const data = await User.create(userData);
    res.status(200).send(data);
  } catch (e) {
    res.status(503).send(e);
  }
};

export const updateUserDetail = async (req, res) => {
  const { userID } = req.params;
  const userData = req.body;
  const data = await User.updateOne({ _id: userID }, { $set: userData });
  res.status(200).send(data);
};

export const deleteUserDetail = async (req, res) => {
  const { userID } = req.params;
  const data = await User.findByIdAndDelete(userID);
  res.status(200).send(data);
};
