const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const jwtValidator = (req = request, res = response, next) => {

  const token = req.header('x-token');
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'The user should be authenticated'
    });
  }
  try {
    const { uid, name } = jwt.verify(
      token,
      process.env.SECRET_JWT_SIGN
    );
    if (!uid && !name) {
      return res.status(401).json({
        ok: false,
        msg: 'Token invalid'
      });
    }
    req.uid = uid;
    req.name = name;
    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Token invalid'
    });
  }

}

module.exports = {
  jwtValidator
}