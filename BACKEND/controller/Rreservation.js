const Rreservation = require("../model/Reservation");

//http://localhost:4000/Reservation/:userId/
exports.getUserReservation = async (req, res) => {
  try {
    const Rreservations = await Rreservation.find({
      userId: req.params.userId,
    });
    res.json(Rreservations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//http://localhost:4000/Reservation/:userId/

exports.addReservation = async (req, res) => {
  const { userId, produits, RreservationDate } = req.body;

  try {
    const newRreservation = new Rreservation({
      userId,
      produits,
      RreservationDate,
      accepted: false,
    });

    await newRreservation.save();
    res.json(newRreservation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//http://localhost:4000/Reservation/:userId/:ReservationId

exports.deleteReservation = async (req, res) => {
  try {
    await Rreservation.findOneAndDelete({
      _id: req.params.RreservationId,
      userId: req.params.userId,
    });
    res.json({ message: "Reservation deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//http://localhost:4000/Reservation/:userId/:ReservationId

exports.updateReservation = async (req, res) => {
  try {
    const updatedReservation = await Rreservation.findOneAndUpdate(
      { _id: req.params.RreservationId, userId: req.params.userId },
      req.body,
      { new: true, useFindAndModify: false }
    );

    if (!updatedReservation) {
      return res.status(404).send({ message: "Reservation not found" });
    }

    res.send(updatedReservation);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getReservationById = async (req, res) => {
  try {
    const { userId, RreservationId } = req.params;
    const Reservation = await Rreservation.findOne({
      _id: RreservationId,
      userId,
    });

    if (!Reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    res.json(Reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
