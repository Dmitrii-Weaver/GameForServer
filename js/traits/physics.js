import Trait from '.trait.js'

export default class physics extends Trait {


    update(entity, gameContext, level) {
        const {deltaTime} = gameContext 
        entity.pos.x += entity.vel.x * deltaTime;
        level.tileCollider.checkX(entity, gameContext, level)

        entity.pos.y += entity.vel.y * deltaTime;
        level.tileCollider.checkY(entity, gameContext, level)

        entity.vel.y += level.gravity * deltaTime
    }

}



