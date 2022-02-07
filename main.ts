basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 500) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
