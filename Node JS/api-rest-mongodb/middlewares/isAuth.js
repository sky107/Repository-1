const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    req.isAuth=false;
    return next();
  }
  const token = authHeader.split(' ')[1];
  console.log(token);
  let decodedToken;
  try {
    decodedToken = jwt.verify(token,'sky');
    console.log(decodedToken);
  } catch (err) {
    console.log("NOT VALIDATED",err);
    req.isAuth=false;
    return next();
  }
  if (!decodedToken) {
    req.isAuth=false;
    return next();
  }
  req.userId = decodedToken.userId;
  req.isAuth=true;
  console.log("VALIDATED",decodedToken)
  next();
};
