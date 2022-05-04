const express = require("express");
const router = express.Router();
const {Location} = require("../models/");


//find all
router.get("/", (req, res) => {
     Location.findAll();
      res.json(Location)
    .then(dbLocation => {
      res.json(dbLocation);
    }).catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
//find one
router.get("/:id", async (req, res) => {
    try {
        const userLocation = await Location.findByPk(req.params.id);
        if (!userLocation) {
          res.status(404).json({ message: 'No Location with this id!' });
          return;
        }
        res.status(200).json(userLocation);
      } catch (err) {
        res.status(500).json(err);
      }
});

//create user
router.post("/", (req, res) => {
  Location.create(req.body)
    .then(newLocation => {
      res.json(newLocation);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//update user
router.put("/:id", (req, res) => {
  Location.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updatedLocation => {
    res.json(updatedLocation);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

//delete a user
router.delete("/:id", (req, res) => {
  Location.destroy({
    where: {
      id: req.params.id
    }
  }).then(delUser => {
    res.json(delUser);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

module.exports = router;