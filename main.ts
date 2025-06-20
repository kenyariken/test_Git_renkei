input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    pins.servoWritePin(AnalogPin.P1, 180)
})
basic.showString("Hello!")
