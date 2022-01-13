const express = require("express");
const Cylon = require("cylon");
const router = express.Router();

var robot = Cylon.robot({
  connections: {
    arduino: { adaptor: "firmata", port: "COM5"}
  },

  devices : {
    redLed: { driver: "led", pin: 11},
    blueLed: { driver: "led", pin: 13},
    buzzer: { driver: "direct-pin", pin: 7},
    buzzerLed: { driver: "led", pin: 10},
  },
}).start();

router.get("/redLightsOn", function (req, res, next) {
  robot.devices.redLed.turnOn();
  robot.devices.redLed.brightness(125);
  res.send("Red lights switched on");
});

router.get("/redLightsOff", function (req, res, next) {
  robot.devices.redLed.turnOff();
  res.send("Red lights switched off");
});

router.get("/redLightsRaiseIntensity", function (req, res, next) {
  robot.devices.redLed.brightness(robot.devices.redLed.currentBrightness() === 225 ? 0 : robot.devices.redLed.currentBrightness() + 25);
  res.send("Intensity raised");
});

router.get("/redLightsLowerIntensity", function (req, res, next) {
  robot.devices.redLed.brightness(robot.devices.redLed.currentBrightness() === 0 ? 225 : robot.devices.redLed.currentBrightness() - 25);
  res.send("Intensity lowered");
});

router.get("/blueLightsOn", function (req, res, next) {
  robot.devices.blueLed.turnOn();
  robot.devices.blueLed.brightness(125);
  res.send("Blue lights switched on");
});

router.get("/blueLightsOff", function (req, res, next) {
  robot.devices.blueLed.turnOff();
  res.send("Blue lights switched off");
});

router.get("/blueLightsRaiseIntensity", function (req, res, next) {
  robot.devices.blueLed.brightness(robot.devices.blueLed.currentBrightness() === 225 ? 0 : robot.devices.blueLed.currentBrightness() + 25);
  console.log(robot.devices.blueLed.currentBrightness())
  res.send("Intensity raised");
});

router.get("/blueLightsLowerIntensity", function (req, res, next) {
  robot.devices.blueLed.brightness(robot.devices.blueLed.currentBrightness() === 0 ? 225 : robot.devices.blueLed.currentBrightness() - 25);
  console.log(robot.devices.blueLed.currentBrightness())
  res.send("Intensity lowered");
});

router.get("/buzzerOn", function (req, res, next) {
  robot.devices.buzzer.digitalWrite(1);
  robot.devices.buzzerLed.turnOn();
  res.send("Music turned on");
});

router.get("/buzzerOff", function (req, res, next) {
  robot.devices.buzzer.digitalWrite(0);
  robot.devices.buzzerLed.turnOff();
  res.send("Music turned off");
});

module.exports = router;