let prettyLights: kitronik_lab_bit.ZIPString = null
let distance = 0
let dice_value = 0
let randommusic = false
let colour = 0
function playMusic () {
    for (let index = 0; index < 5; index++) {
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
    }
    kitronik_lab_bit.trafficLightOff(kitronik_lab_bit.TrafficLight.one)
    kitronik_lab_bit.trafficLightOff(kitronik_lab_bit.TrafficLight.two)
    prettyLights.clear()
    basic.pause(1000)
}
input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    prettyLights.clear()
    kitronik_lab_bit.trafficLightOff(kitronik_lab_bit.TrafficLight.one)
    kitronik_lab_bit.trafficLightOff(kitronik_lab_bit.TrafficLight.two)
    kitronik_lab_bit.diceOff()
})
function PlayFuneralMarch () {
    music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
}
function setLights () {
    kitronik_lab_bit.trafficLightShow(
    kitronik_lab_bit.TrafficLight.one,
    0xff0000,
    0xffff00,
    0x00ff00
    )
    kitronik_lab_bit.trafficLightShow(
    kitronik_lab_bit.TrafficLight.two,
    0xff0000,
    0xffff00,
    0x00ff00
    )
    prettyLights.showRainbow()
}
basic.forever(function () {
    music.setBuiltInSpeakerEnabled(false)
    distance = kitronik_lab_bit.measureCm()
    dice_value = randint(1, 6)
    randommusic = Math.randomBoolean()
    colour = 0
    basic.pause(3000)
    basic.showNumber(distance)
    kitronik_lab_bit.diceShow(dice_value)
    if (input.buttonIsPressed(Button.B) || distance < 30) {
        led.plotBarGraph(
        1,
        7
        )
        prettyLights.showColor(0xd4ff00)
        setLights()
        if (randommusic) {
            playMusic()
        } else {
            PlayFuneralMarch()
        }
    }
    prettyLights = kitronik_lab_bit.createZIPString(7)
})
