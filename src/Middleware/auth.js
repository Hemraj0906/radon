const jwt = require("jsonwebtoken");
let decodedToken


const authenticate= function ( req, res, next) {
  try{
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
     decodedToken = jwt.verify(token, "functionup-radon");
     if (!decodedToken) return res.status(500).send({ status: false, msg: "token invalid" });
     next()
  }catch(err){
    res.send({msg:"Error"})
  }
}
    const authorise= function(req,res,next){
      try{
       //userId for which the request is made. In this case message to be posted.
       let userToBeModified = req.params.userId
      //  //userId for the logged-in user
       let userLoggedIn = decodedToken.userId
    
       //userId comparision to check if the logged-in user is requesting for their own data
       if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
   
next()
      }catch(err){
        res.send({msg:"Error"})
      }

  }
 
   
module.exports.authenticate= authenticate
module.exports.authorise= authorise

