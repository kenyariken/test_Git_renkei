input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
})
basic.showString("Hello!")
