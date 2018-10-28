const settings = require('./settings');
const dualshock = require('dualshock');

function getDevices() {
    console.log('ds4-lightbar v2018.1 by Brasileiro\n');
    console.log('To configure the color, open the "settings.js" file.\n');

    console.log('Finding devices...\n');

    let devices = dualshock.getDevices();

    if (devices.length <= 0) {
        console.log('No Dualshock 4 controllers found!');
        process.exit(0);
    }

    console.log(devices);

    return devices;
}

function setLightbar() {

    let gamepad = dualshock.open(getDevices()[0]);

    console.log('\nApplying RGB(%s, %s, %s) to the first device...\n',
        settings.lightbar.red,
        settings.lightbar.green,
        settings.lightbar.blue,
    );

    gamepad.setLed(
        settings.lightbar.red,
        settings.lightbar.green,
        settings.lightbar.blue
    );

    console.log('Lightbar color applied successfully!');
}

setLightbar();
process.exit(0);
