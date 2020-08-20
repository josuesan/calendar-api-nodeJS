const jwt = require('jsonwebtoken');

const generateJwt = (uid, name) => {

  return new Promise((resolve, reject) => {
    const payload = { uid, name };
    jwt.sign(payload, process.env.SECRET_JWT_SIGN, {
      expiresIn: '2h'
    }, (error, token) => {
      if (error) {
        console.log(error);
        reject('the token could not be generated')
      }
      resolve(token);
    });
  });

}

module.exports = {
  generateJwt
}