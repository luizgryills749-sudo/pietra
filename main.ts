input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
    basic.showString("PARABENS PIETRA")
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    music.setBuiltInSpeakerEnabled(true)
})
input.onButtonPressed(Button.B, function () {
    music.setBuiltInSpeakerEnabled(false)
})
basic.forever(function () {
    music.setVolume(255)
})
