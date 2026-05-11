const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//! User Registration

const userController = {
  //! Register
  register: asyncHandler(async (req, res) => {
    const { email, userName, password } = req.body;
    console.log(email, password, userName);
    // !Validate
    if (!userName || !password || !email) {
      throw new Error("Please fill all the details");
    }
    // ! user Already Exist
    const userExist = await User.findOne({ email });
    if (userExist) {
      throw new Error("User is already Exist");
    }
    // ! hash Password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    // !create the user and save the user
    const userCreated = await User.create({
      userName,
      email,
      password: hashPassword,
    });
    res.status(201).json({
      message: "User Register Successfully",
      data: {
        id: userCreated._id,
        username: userCreated.userName,
        email: userCreated.email,
      },
    });
  }),
  //!Login

  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // ! Email exist
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid Email");
    }
    // ! password check
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid User password");
    }
    // ! JWT generation
    const token = jwt.sign({ _id: user._id }, "abcdef", {
      expiresIn: "30d",
    });

    res.status(200).json({
      message: "Login Successful",
      data: {
        token: token,
        email: user.email,
        userName: user.userName,
      },
    });
  }),

  //! Profile details

  profile: asyncHandler(async (req, res) => {
    const user = await User.findById(req.id);
    if (!user) {
      throw new Error("Invalid User");
    }
    res.status(200).json({
      message: "success",
      data: {
        username: user.userName,
        email: user.email,
      },
    });
  }),

  // ! Update Password

  changeUserPassword: asyncHandler(async (req, res) => {
    const user = await User.findById(req.id);

    const { password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const updatePassword = await User.updateOne(
      { _id: user._id },
      {
        $set: {
          password: hashedPassword,
        },
      },
    );
    res.json({
      message: "Password updated successfully",
    });
  }),
  updateProfile: asyncHandler(async (req, res) => {
    const { email, userName } = req.body;

    const payload = {};

    if (email?.trim()) {
      payload.email = email;
    }

    if (userName?.trim()) {
      payload.userName = userName;
    }

    const updatedUser = await User.findByIdAndUpdate(req.id, payload, {
      new: true,
    });

    res.json({
      message: "Profile updated successfully",
      updatedUser,
    });
  }),
};

module.exports = userController;
