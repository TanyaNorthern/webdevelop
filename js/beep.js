var sound = new Howl({
    src: ['../audio/sound_12020.wav']
});

export default function beep() { sound.play(); }