const express = require("express");
const Cylon = require("cylon");
const router = express.Router();

var robot = Cylon.robot({
  connections: {
    arduino: { adaptor: "firmata", port: "your arduion port"}
  },

  devices : {
    led: { driver: "led", pin: 13},
  },
}).start();

router.get("/redLed", function (req, res, next) {
  robot.devices.led.turnOn();
  res.send("Red LED Started");
});

module.exports = router;