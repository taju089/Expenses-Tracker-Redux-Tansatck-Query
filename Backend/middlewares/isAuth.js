const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const verifyUser =jwt.verify(token, "abcdef" , (err, decoded)=>{
    console.log(decoded)
    if(!err){
        return decoded
    }else{
        return false
    }
  });
  if(!verifyUser){
    throw new Error("Access token is invalid")
  }
  req.id = verifyUser._id
  next();
};

module.exports = isAuth;
