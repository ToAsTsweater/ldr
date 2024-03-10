/**
 * 1 dark
 * 
 * 2 hell
 */
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) <= 1000) {
        basic.showString("1")
    } else {
        basic.showString("2")
    }
})
