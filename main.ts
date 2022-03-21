pins.onPulsed(DigitalPin.P13, PulseValue.Low, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("A")
})
pins.onPulsed(DigitalPin.P15, PulseValue.High, function () {
    basic.showString("D")
})
pins.onPulsed(DigitalPin.P14, PulseValue.High, function () {
    basic.showString("B")
})
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        basic.showString("C")
    }
})
