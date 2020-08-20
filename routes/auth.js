/**
 * Routes Auth
 * HOST + /api/auth
 */
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const {
  createUser,
  loginUser,
  refreshToken
} = require('../controllers/authController');
const { fieldValidator } = require('../middlewares/fieldValidator');
const { jwtValidator } = require('../middlewares/jwtValidator');

router.post(
  '/',
  [
    check('email', 'The email field is required').isEmail(),
    check('password', 'The password field should be 6 characters').isLength({ min: 6 }),
    fieldValidator
  ],
  loginUser
);
router.post(
  '/register',
  [
    check('name', 'The name field is required').not().isEmpty(),
    check('email', 'The email field is required').isEmail(),
    check('password', 'The password field should be 6 characters').isLength({ min: 6 }),
    fieldValidator
  ],
  createUser
);
router.get('/renew', [jwtValidator], refreshToken);


module.exports = router;