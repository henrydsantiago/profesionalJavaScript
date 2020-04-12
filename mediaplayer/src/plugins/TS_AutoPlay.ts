import MediaPlayer from "../MediaPlayer"

class AutoPlay {
    constructor(){
    }
    run(player: MediaPlayer){
        if(!player.media.mute){
            player.media.mute = true
        }
        player.togglePlay()
    }
}
export default AutoPlay