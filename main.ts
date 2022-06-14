IR.IR_callbackUser(function (message) {
    if (message == 12) {
        if (solución == 1) {
            basic.showIcon(IconNames.Happy)
            strip.showRainbow(1, 255)
        } else {
            basic.showIcon(IconNames.Sad)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        }
    }
    if (message == 24) {
        if (solución == 2) {
            basic.showIcon(IconNames.Happy)
            strip.showRainbow(1, 255)
        } else {
            basic.showIcon(IconNames.Sad)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        }
    }
    if (message == 94) {
        if (solución == 3) {
            basic.showIcon(IconNames.Happy)
            strip.showRainbow(1, 255)
        } else {
            basic.showIcon(IconNames.Sad)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        }
    }
    if (message == 8) {
        if (solución == 4) {
            basic.showIcon(IconNames.Happy)
            strip.showRainbow(1, 255)
        } else {
            basic.showIcon(IconNames.Sad)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        }
    }
    if (message == 28) {
        if (solución == 5) {
            basic.showIcon(IconNames.Happy)
            strip.showRainbow(1, 255)
        } else {
            basic.showIcon(IconNames.Sad)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        }
    }
    if (message == 90) {
        if (solución == 6) {
            basic.showIcon(IconNames.Happy)
            strip.showRainbow(1, 255)
        } else {
            basic.showIcon(IconNames.Sad)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        }
    }
    if (message == 66) {
        if (solución == 7) {
            basic.showIcon(IconNames.Happy)
            strip.showRainbow(1, 255)
        } else {
            basic.showIcon(IconNames.Sad)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        }
    }
    if (message == 82) {
        if (solución == 8) {
            basic.showIcon(IconNames.Happy)
            strip.showRainbow(1, 255)
        } else {
            basic.showIcon(IconNames.Sad)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        }
    }
    if (message == 74) {
        if (solución == 9) {
            basic.showIcon(IconNames.Happy)
            strip.showRainbow(1, 255)
        } else {
            basic.showIcon(IconNames.Sad)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        }
    }
    if (message == 22) {
        if (solución == 0) {
            basic.showIcon(IconNames.Happy)
            strip.showRainbow(1, 255)
        } else {
            basic.showIcon(IconNames.Sad)
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        }
    }
})
let unión = ""
let letras_2 = 0
let LETRAS = 0
let strip: neopixel.Strip = null
let solución = 0
basic.showLeds(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `)
basic.forever(function () {
    basic.pause(1000)
    strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    LETRAS = randint(0, 5)
    letras_2 = randint(0, 4)
    unión = "" + LETRAS + "+" + letras_2
    solución = LETRAS + letras_2
    basic.showString(unión)
    basic.pause(5000)
})
