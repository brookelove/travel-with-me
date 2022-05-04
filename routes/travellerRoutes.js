const express = require("express");
const router = express.Router();
const {Traveller, Location, Trip} = require("../models/");

//find all
router.get("/", (req, res) => {
    Traveller.findAll({
        include: [Location.name, Trip.name]
    });
     res.json(Traveller)
   .then(dbTraveller => {
     res.json(dbTraveller);
   }).catch(err => {
     console.log(err);
     res.status(500).json({ msg: "an error occured", err });
   });
});
//find one
router.get("/:id", async (req, res) => {
   try {
       const userTraveller = await Traveller.findByPk(req.params.id);
       if (!userTraveller) {
         res.status(404).json({ message: 'No Traveller with this id!' });
         return;
       }
       res.status(200).json(userTraveller);
     } catch (err) {
       res.status(500).json(err);
     }
});

//create user
router.post("/", (req, res) => {
 Traveller.create(req.body)
   .then(newTraveller => {
     res.json(newTraveller);
   })
   .catch(err => {
     console.log(err);
     res.status(500).json({ msg: "an error occured", err });
   });
});

//update user
router.put("/:id", (req, res) => {
 Traveller.update(req.body, {
   where: {
     id: req.params.id
   }
 }).then(updatedTraveller => {
   res.json(updatedTraveller);
 })
 .catch(err => {
   console.log(err);
   res.status(500).json({ msg: "an error occured", err });
 });
});

//delete a user
router.delete("/:id", (req, res) => {
 Traveller.destroy({
   where: {
     id: req.params.id
   }
 }).then(delTraveller => {
   res.json(delTraveller);
 })
 .catch(err => {
   console.log(err);
   res.status(500).json({ msg: "an error occured", err });
 });
});

module.exports = router;