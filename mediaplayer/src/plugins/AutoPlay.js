/* function AutoPlay(){

}
 */

 class AutoPlay {
     constructor(){
         this.run = (player) => {
            if(!player.muted){
                player.muted = true
            }
            player.togglePlay()
         }
     }
 }
export default AutoPlay