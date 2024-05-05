// models/Appointment.js

const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true }//"12:00"
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
