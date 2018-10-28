const settings = require('./settings');
const dualshock = require('dualshock');

function setLightbar() {
    let gamepad = dualshock.open(dualshock.getDevices()[0]);

    gamepad.setLed(
        settings.lightbar.red,
        settings.lightbar.green,
        settings.lightbar.blue
        );
}

setLightbar();
process.exit(0);
