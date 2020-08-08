
import Scene from 'scene.js'
export default class CompositionScene extends Scene{
    constructor() {
    
       super()
        this.countDown = 2
    }


    update(gameContext) {
        this.countDown -= gameContext.deltaTime
        if(this.countDown <=0){
            this.events.emit(Scene.EVENT_COMPLETE)
        }
 }
}