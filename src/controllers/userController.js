const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


  const createUser = async function (req, res) {
    try {
        let data = req.body
        console.log(data)
         if ( Object.keys(data).length != 0) {
            let savedData = await userModel.create(data)
            res.status(201).send({ msg: savedData })
        }
        else res.status(400).send({ msg: "BAD REQUEST"})
    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
};

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });

  //TOKEN GENERATION PROCESS//
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.status(400).send({ status: true, token: token });
  }
  catch(err){
    res.status(500).send({ msg: "Error", error: err.message })
  }
};


const getUserData = async function (req, res) {
  try{
  
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(500).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
  }
  catch(err){
    res.status(403).send({msg:"error"})
  }
};

const updateUser = async function (req, res) {
  try{
// Do the same steps here:
// Check if the token is present
// Check if the token present is a valid token
// Return a different error message in both these cases

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(403).send("No such user exists");
  }
  // const postMessage = async function (req, res) {
    let message = req.body.message

  // let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {message},{new:true});
  res.status(201).send({ status: updatedUser, message: updatedUser });
}
catch(err){
  res.send({msg:"error"})
}
};
const isDelete = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(500).send("No such user exists");
  }
//   console.log("hi")

//   let userData = req.body;
  let isDeleted= await userModel.findOneAndUpdate({ _id: userId},{$set:{isDeleted:true}},{new:true})
//   console.log(isDeleted)
  res.status(201).send({ status:true, data:isDeleted });
}catch(err){
  res.send({msg:"error"})
}
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.isDelete=isDelete;