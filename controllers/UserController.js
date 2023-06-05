import generateToken from "../utils/generatetoken.js";
import expressAsyncHandler from "express-async-handler";
import User from "../models/User.js";

export const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password, isActive } = req.body;
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User Already Exist");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      msg: "Succefully Created",
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});

export const getUsers = expressAsyncHandler( async (req,res)=>{
    const user = await User.find();
    if (user) {
        res.status(200).json(user);
      } else {
        res.status(400);
        throw new Error("No Record Found");
      }

});
