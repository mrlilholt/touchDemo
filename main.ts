input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("good job")
})
basic.showString("Hi")
pins.touchSetMode(TouchTarget.LOGO, TouchTargetMode.Capacitive)
basic.showString("touch me.")
