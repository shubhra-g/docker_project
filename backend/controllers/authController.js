import Users from "../models/usersModel.js";

const verifyEmail = async (req, res) => {
  const { uniqueString } = req.params;

  console.log(uniqueString, "The Unique String BACKEND");

  
  //check if User Exist
  const user = await Users.findOne({ uniqueString: uniqueString });

  if (!user) {
    return res.status(404).json({
      status: "Failed",
      message: "Unfortunately We couldn't verify your email. Email not found",
    });
  }

  //Update User
  user.isVerified = true;
  user.uniqueString = null
  
  await user.save();

  res.status(200).json({
    status: "Success",
    message: "Email Verified Successfully. Please Login To Continue",
  });
};


export { verifyEmail };