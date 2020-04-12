import MediaPlayer from '@henrydsantiago/mediaplayer'
import AutoPlay from '@henrydsantiago/mediaplayer/lib/plugins/TS_AutoPlay'
import AutoPause from '@henrydsantiago/mediaplayer/lib/plugins/TS_AutoPause'
import Ads from '@henrydsantiago/mediaplayer/lib/plugins/Ads'

const video = document.querySelector("video")
const player = new MediaPlayer({elemento: video, plugins: [
    new AutoPlay(), new AutoPause(), new Ads()
]})


const button: HTMLElement = document.querySelector("button")
button.onclick = ()=> player.togglePlay()

const mute: HTMLElement = document.getElementById('muteButton')
mute.onclick= ()=> player.toggleMute()

/* if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js').catch(error => {
        console.log(error.message)
    })
}  */
