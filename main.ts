pins.servoSetPulse(AnalogPin.P0, 3000)
let forward = 1
let backward = -1
let direction = forward
let speed = 5
let max_angle = 135
let min_angle = 45
let angle = min_angle
basic.forever(function () {
    if (angle > max_angle) {
        direction = backward
    }
    if (angle < min_angle) {
        direction = forward
    }
    pins.servoWritePin(AnalogPin.P0, angle)
    angle += direction
})
