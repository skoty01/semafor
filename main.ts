function yellow_light_on () {
    pasekLED.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    pasekLED.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    pasekLED.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    pasekLED.show()
}
function red_light_on () {
    pasekLED.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    pasekLED.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    pasekLED.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    pasekLED.show()
}
function green_light_on () {
    pasekLED.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    pasekLED.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    pasekLED.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    pasekLED.show()
}
let pasekLED: neopixel.Strip = null
pasekLED = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
basic.forever(function () {
    red_light_on()
    basic.pause(3000)
    yellow_light_on()
    basic.pause(1000)
    green_light_on()
    basic.pause(1000)
})
