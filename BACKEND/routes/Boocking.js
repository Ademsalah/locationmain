const express = require("express");
const routerBoocking = express.Router();
const { validationResult } = require("express-validator");
const {
  getUserReservation,
  getReservationById,
  addReservation,
  deleteReservation,
  updateReservation,
} = require("../controller/reservation");

// partie user
routerBoocking.post("/", addReservation);
//partie admin
routerBoocking.get("/:userId", getUserReservation);
routerBoocking.delete("/:userId/:reservationId", deleteReservation);
routerBoocking.patch("/:userId/:reservationId", updateReservation);
routerBoocking.get("/:userId/:reservationId", getReservationById);
module.exports = routerBoocking;
