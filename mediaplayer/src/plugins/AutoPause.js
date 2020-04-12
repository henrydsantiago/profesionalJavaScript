class AutoPause{
    constructor (){
        this.threshold = 0.25
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this)
    }
    run(player){
        this.player = player
        const obs = new IntersectionObserver(this.handlerIntersection, {threshold: 0.25})

        obs.observe(this.player.media)

        document.addEventListener("visibilitychange", this.handlerVisibilityChange)
        
    }

    handlerIntersection(entries){
        const entry = entries[0]
        const isVisible = entry.intersectionRatio >= this.threshold
        if(isVisible){
            this.player.iniciar()
        }else{
            this.player.detener()
        }
        /* console.log(entry) */
    }

    handlerVisibilityChange(){
        const isVisible = document.visibilityState === "visible"
        isVisible
            ? this.player.iniciar()
            : this.player.detener()
    }
}


export default AutoPause
