import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'
/* import { foo } from './MediaPlayer.js' */
/* console.log(foo) */

//ECMAS6+
/* const video = document.querySelector("video")
const button = document.querySelector("button")

button.onclick = ()=> {
    const player = new MediaPlayer({ elemento: video, plugins: [] })
    console.log(player)
    player.togglePlay()
} */

//EL CÓDIGO DE LA CLASE
const video = document.querySelector("video")
const player = new MediaPlayer({elemento: video, plugins: [
    new AutoPlay(), new AutoPause()
]})

/* function MediaPlayer(config){
    this.media = config.el
}
 */
MediaPlayer.prototype.toggle = function(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

const button = document.querySelector("button")
button.onclick = ()=> player.toggle()

const mute = document.getElementById('muteButton')
mute.onclick= ()=> player.toggleMute()
//HASTA AQUÍ


if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js').catch(error => {
        console.log(error.message)
    })
}



// DE RESPALDO
/* MediaPlayer.prototype.play = function() {
        video.play()
} */
