/**
 * Routes Events
 * HOST + /api/events
 */
const { request, response } = require("express");
const Event = require("../models/Event");
const { findByIdAndUpdate } = require("../models/Event");


const getEvents = async (req = request, res = response) => {
  const events = await Event.find().populate('user', ['name', 'email']);
  return res.status(200).json({
    ok: true,
    events
  });
};

const getEvent = async (req = request, res = response) => {
  const eventId = req.params.id;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'Event not found it'
      });
    }

    return res.status(200).json({
      ok: true,
      event
    });
  }
  catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'An error appear, please talk to the administrator'
    });
  }

};

const createEvent = async (req = request, res = response) => {

  const newEvent = new Event(req.body);
  try {
    newEvent.user = req.uid;
    const event = await newEvent.save();
    return res.status(200).json({
      ok: true,
      event
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'An error appear, please talk to the administrator'
    });
  }
};

const updateEvent = async (req = request, res = response) => {
  const eventId = req.params.id;
  const uid = req.uid;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'Event not found it'
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'You have insufficient permissions'
      });
    }

    const eventUpdated = await Event.findByIdAndUpdate(
      eventId,
      {
        ...req.body,
        user: uid
      },
      { new: true }
    );
    return res.status(200).json({
      ok: true,
      event: eventUpdated
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'An error appear, please talk to the administrator'
    });
  }

};

const deleteEvent = async (req = request, res = response) => {
  const eventId = req.params.id;
  const uid = req.uid;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'Event not found it'
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'You have insufficient permissions'
      });
    }

    const eventDeleted = await Event.findByIdAndDelete(eventId);
    return res.status(200).json({
      ok: true,
      event: eventDeleted
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'An error appear, please talk to the administrator'
    });
  }
};

module.exports = {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent
};