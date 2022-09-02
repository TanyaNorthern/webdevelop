import { Howl, Howler} from 'howler'

const sound = new Howl({
    scr: ['../audio/sound_12020.wav']
})

export default function beep() {
    sound.play()
}
