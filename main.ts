input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.pause(1000)
    if (input.temperature() < 15) {
        basic.setLedColor(basic.rgb(0, 0, 255))
    }
    if (input.temperature() > 25) {
        basic.setLedColor(basic.rgb(255, 0, 0))
    } else {
        basic.setLedColor(basic.rgb(0, 255, 0))
    }
    basic.pause(1000)
    basic.showString("" + (input.temperature()))
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.pause(1000)
    if (input.temperature() < 15) {
        basic.setLedColor(basic.rgb(0, 0, 255))
    }
    if (input.temperature() > 25) {
        basic.setLedColor(basic.rgb(255, 0, 0))
    }
    if (input.temperature() <= 25 && 15 <= input.temperature()) {
        basic.setLedColor(basic.rgb(0, 255, 0))
    }
    basic.pause(1000)
    basic.showString("" + (input.temperature()))
})
