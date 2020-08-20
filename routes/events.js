
const { Router } = require("express");
const { jwtValidator } = require("../middlewares/jwtValidator");
const {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent
} = require("../controllers/eventsController");
const { check } = require("express-validator");
const { fieldValidator } = require("../middlewares/fieldValidator");
const { isDate } = require("../helpers/isDate");

const router = Router();
router.use(jwtValidator);

router.get('/', getEvents);

router.get('/:id', getEvent);

router.post('/', [
  check('title', 'Title is required').not().isEmpty(),
  check('start', 'Start date is required').custom(isDate),
  check('end', 'End date is required').custom(isDate),
  check('notes', 'Notes should be a string').optional().isString(),
  fieldValidator
], createEvent);

router.put('/:id', [
  check('title', 'Title is required').not().isEmpty(),
  check('start', 'Start date is required').custom(isDate),
  check('end', 'End date is required').custom(isDate),
  check('notes', 'Notes should be a string').optional().isString(),
  fieldValidator
], updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;