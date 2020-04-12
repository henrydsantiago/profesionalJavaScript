class MediaPlayer {
    media: HTMLMediaElement
    plugins: Array<any>
    container: HTMLElement

    constructor(config) {
        this.media = config.elemento      
        this.plugins = config.plugins || []

        this.initPlayer()
        this.initPlugins()
    }

    initPlayer(){
        this.container = document.createElement('div')
        this.container.style.position = 'relative'
        this.media.parentNode.insertBefore(this.container, this.media)
        this.container.appendChild(this.media)
    }

    private initPlugins(){
        this.plugins.forEach(plugin => {
            plugin.run(this)
        })
    }


    togglePlay() { 
        this.media.paused
            ?this.media.play()
            :this.media.pause()
    }
    play(){
        this.media.play()
    }
    pause(){
        this.media.pause()
    }

    toggleMute(){
        console.log(this.media.muted)
        this.media.muted
            ? this.media.muted = false
            :this.media.muted = true
    }

    mute(){
        this.media.muted = true
    }

    unmute(){
        this.media.muted = false
    }
}
/* var saludo = "holaaa"
export const foo = saludo */
export default MediaPlayer;