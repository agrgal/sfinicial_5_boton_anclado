led.enable(false)
// Lógica negativa
let estado = pins.digitalReadPin(DigitalPin.P5)
let estadoANT = estado
let encendido = 0
// LED apagado
pins.digitalWritePin(DigitalPin.P4, 0)
basic.forever(function () {
    estado = pins.digitalReadPin(DigitalPin.P5)
    if (estado == 0 && estadoANT == 1) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        encendido += 1
        // LED apagado
        pins.digitalWritePin(DigitalPin.P4, encendido % 2)
    }
    estadoANT = estado
    basic.pause(50)
})
