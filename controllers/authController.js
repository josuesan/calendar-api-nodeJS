const { response, request } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateJwt } = require('../helpers/jwt');

const createUser = async (req = request, res = response) => {

  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'An User exist with this email',
      });
    };
    user = new User(req.body);

    //Encrypt password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);
    await user.save();
    //Generate JWT
    const token = await generateJwt(user._id, user.name);
    res.status(201).json({
      ok: true,
      uid: user._id,
      name: user.name,
      token
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: 'An error appear, please talk to the administrator',
    });

  }
}

const loginUser = async (req = request, res = response) => {

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'User and password dont be correct',
      });
    };
    // Check passwords 
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'User and password dont be correct',
      });
    }
    // Generate JWT
    const token = await generateJwt(user._id, user.name);
    res.status(200).json({
      ok: true,
      uid: user._id,
      name: user.name,
      token
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'An error appear, please talk to the administrator',
    });
  }

}

const refreshToken = async (req = request, res = response) => {
  const { uid, name } = req.uid;
  try {
    const token = await generateJwt(uid, name)
    return res.status(200).json({
      ok: true,
      token
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Token could not be refreshed'
    });
  }


}

module.exports = {
  createUser,
  loginUser,
  refreshToken
}