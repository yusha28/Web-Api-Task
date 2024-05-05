// models/Reservation.js

const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  eventDate: { type: Date, required: true },//"2024-10-20"
  numberOfGuests: { type: Number, required: true },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
