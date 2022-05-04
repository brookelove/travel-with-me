const express = require("express");
const router = express.Router();
const {Traveller, Location, Trip} = require("../models/");

//find all
router.get("/", (req, res) => {
    Trip.findAll();
     res.json(Trip)
   .then(dbTrip => {
     res.json(dbTrip);
   }).catch(err => {
     console.log(err);
     res.status(500).json({ msg: "an error occured", err });
   });
});
//find one
router.get("/:id", async (req, res) => {
   try {
       const userTrip = await Trip.findByPk(req.params.id);
       if (!userTrip) {
         res.status(404).json({ message: 'No Trip with this id!' });
         return;
       }
       res.status(200).json(userTrip);
     } catch (err) {
       res.status(500).json(err);
     }
});

//create user
router.post("/", (req, res) => {
 Trip.create(req.body)
   .then(newTrip => {
     res.json(newTrip);
   })
   .catch(err => {
     console.log(err);
     res.status(500).json({ msg: "an error occured", err });
   });
});

//update user
router.put("/:id", (req, res) => {
 Trip.update(req.body, {
   where: {
     id: req.params.id
   }
 }).then(updatedTrip => {
   res.json(updatedTrip);
 })
 .catch(err => {
   console.log(err);
   res.status(500).json({ msg: "an error occured", err });
 });
});

//delete a user
router.delete("/:id", (req, res) => {
 Trip.destroy({
   where: {
     id: req.params.id
   }
 }).then(delTrip => {
   res.json(delTrip);
 })
 .catch(err => {
   console.log(err);
   res.status(500).json({ msg: "an error occured", err });
 });
});

module.exports = router;