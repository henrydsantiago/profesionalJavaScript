class MediaPlayer {
    constructor(config) {
        this.media = config.elemento      
        this.plugins = config.plugins || []

        this._initPlugins()
    }

    _initPlugins(){
        const player = {
            togglePlay: ()=> this.togglePlay(),
            media: this.media,
            get muted() {
                return this.media.muted
            },
            set muted(value){
                this.media.muted = value
            },
            iniciar: () => this.play(),
            detener: () => this.pause()
        }
        this.plugins.forEach(plugin => {
            plugin.run(player)
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