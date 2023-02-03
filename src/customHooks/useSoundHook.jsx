import useSound from "use-sound"

import sound from "/sound1.mp3"

//to be completed
export default function useSoundHook() {
   const [play] = useSound(sound, { volume: 0.25 })
   return play
}
