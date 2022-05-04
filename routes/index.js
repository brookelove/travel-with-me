const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("welcome to my application!")
})

const tripRoutes = require("./tripRoutes");
router.use("/api/users",tripRoutes)

const travellerRoutes = require("./travellerRoutes");
router.use("/api/pets",travellerRoutes)

const locationRoutes = require("./locationRoutes");
router.use("/api/toys",locationRoutes)

module.exports = router;