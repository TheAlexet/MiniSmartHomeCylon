const express = require("express");
const Cylon = require("cylon");
const router = express.Router();

var robot = Cylon.robot({
  connections: {
    arduino: { adaptor: "firmata", port: "COM5"}
  },

  devices : {
    blueLeds: { driver: "led", pin: 6},
    yellowLeds: { driver: "led", pin: 5},
    multicolorRedLed: { driver: 'led', pin: 11 },
    multicolorGreenLed: { driver: 'led', pin: 10 },
    multicolorBlueLed: { driver: 'led', pin: 9 },
    buzzer: { driver: "direct-pin", pin: 2},
    buzzerLed: { driver: "led", pin: 13},
    motor: { driver: "motor", pin: 3},
  },
}).start();

router.get("/blueLightsOn", function (req, res, next) {
  robot.devices.blueLeds.turnOn();
  robot.devices.blueLeds.brightness(125);
  res.send("Luces azules encendidas");
});

router.get("/blueLightsOff", function (req, res, next) {
  robot.devices.blueLeds.turnOff();
  res.send("Luces azules apagadas");
});

router.get("/blueLightsRaiseIntensity", function (req, res, next) {
  robot.devices.blueLeds.brightness(robot.devices.blueLeds.currentBrightness() === 225 ? 0 : robot.devices.blueLeds.currentBrightness() + 25);
  res.send("Intensidad azul aumentada");
});

router.get("/blueLightsLowerIntensity", function (req, res, next) {
  robot.devices.blueLeds.brightness(robot.devices.blueLeds.currentBrightness() === 0 ? 225 : robot.devices.blueLeds.currentBrightness() - 25);
  res.send("Intensidad azul disminuida");
});

router.get("/yellowLightsOn", function (req, res, next) {
  robot.devices.yellowLeds.turnOn();
  robot.devices.yellowLeds.brightness(125);
  res.send("Luces amarillas encendidas");
});

router.get("/yellowLightsOff", function (req, res, next) {
  robot.devices.yellowLeds.turnOff();
  res.send("Luces amarillas apagadas");
});

router.get("/yellowLightsRaiseIntensity", function (req, res, next) {
  robot.devices.yellowLeds.brightness(robot.devices.yellowLeds.currentBrightness() === 225 ? 0 : robot.devices.yellowLeds.currentBrightness() + 25);
  res.send("Intensidad amarilla aumentada");
});

router.get("/yellowLightsLowerIntensity", function (req, res, next) {
  robot.devices.yellowLeds.brightness(robot.devices.yellowLeds.currentBrightness() === 0 ? 225 : robot.devices.yellowLeds.currentBrightness() - 25);
  res.send("Intensidad amarilla disminuida");
});

var multicolorLightOn = false;

router.get("/multicolorLightOn", function (req, res, next) {
  multicolorLightOn = true;
  every((1).second(), function() {
    if(multicolorLightOn) {
      robot.devices.multicolorRedLed.brightness(Math.random() * 255)
      robot.devices.multicolorGreenLed.brightness(Math.random() * 255)
      robot.devices.multicolorBlueLed.brightness(Math.random() * 255)
    }
  });
  res.send("Luz multicolor encendida");
});

router.get("/multicolorLightOff", function (req, res, next) {
  multicolorLightOn = false;
  robot.devices.multicolorRedLed.turnOff()
  robot.devices.multicolorGreenLed.turnOff()
  robot.devices.multicolorBlueLed.turnOff()
  res.send("Luz multicolor apagada");
});

router.get("/buzzerOn", function (req, res, next) {
  robot.devices.buzzer.digitalWrite(1);
  robot.devices.buzzerLed.turnOn();
  res.send("Música encendida");
});

router.get("/buzzerOff", function (req, res, next) {
  robot.devices.buzzer.digitalWrite(0);
  robot.devices.buzzerLed.turnOff();
  res.send("Música apagada");
});

router.get("/motorOn", function (req, res, next) {
  robot.devices.motor.turnOn();
  res.send("Motor encendido");
});

router.get("/motorOff", function (req, res, next) {
  robot.devices.motor.turnOff();
  res.send("Motor apagado");
});

module.exports = router;