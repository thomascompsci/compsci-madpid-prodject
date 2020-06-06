sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.fire, 200)
    music.powerDown.playUntilDone()
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(1)
mySprite = sprites.create(img`
. . . . f f f f . . . . 
. . f f e e e e f f . . 
. f f e e e e e e f f . 
f f f f 4 e e e f f f f 
f f f 4 4 4 e e f f f f 
f f f 4 4 4 4 e e f f f 
f 4 e 4 4 4 4 4 4 e 4 f 
f 4 4 f f 4 4 f f 4 4 f 
f e 4 d d d d d d 4 e f 
. f e d d b b d d e f . 
. f f e 4 4 4 4 e f f . 
e 4 f b 1 1 1 1 b f 4 e 
4 d f 1 1 1 1 1 1 f d 4 
4 4 f 6 6 6 6 6 6 f 4 4 
. . . f f f f f f . . . 
. . . f f . . f f . . . 
`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(2000)
controller.moveSprite(mySprite)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 7 7 7 7 f f . . . . . . . . 
. . . . . . . f b 7 7 7 7 7 7 b f . . . . . . . 
. . . . . . . f 7 7 7 7 7 7 7 7 f . . . . . . . 
. . . . . . f d 7 7 7 7 7 7 7 7 d f . . . . . . 
. . . . . . f d d 7 7 7 7 7 7 d d f . . . . . . 
. . . . . . f b d d 7 7 7 7 d d d f . . . . . . 
. . . . . . f c d b f d d f b d b f . . . . . . 
. . . . . . . f b c f 7 7 f c b f f f . . . . . 
. . . . . . . f f b 7 7 7 7 b c f b c f . . . . 
. . . . . . . . f c d b 7 b d f b b b f . . . . 
. . . . . . . f f f f f f f f f f c f . . . . . 
. . . . . f c b 7 b c f f f f f . . . . . . . . 
. . . . . f 7 b 7 b 7 f f f f . . . . . . . . . 
. . . . . . f f b f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, Math.randomRange(-50, 50), Math.randomRange(-50, 50))
})
