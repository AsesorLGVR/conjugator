namespace SpriteKind {
    export const conjugación = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.conjugación, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    sprite.destroy(effects.spray, 500)
    sprite.startEffect(effects.fire, 100)
    music.powerUp.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.disintegrate, 500)
})
let projectile: Sprite = null
let elige = 0
scene.setBackgroundColor(13)
let sprite = sprites.create(img`
. . . . 2 2 2 2 . . . . . 
. . 2 2 2 2 2 2 2 2 . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`, SpriteKind.Player)
controller.moveSprite(sprite, 100, 100)
sprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
game.onUpdateInterval(500, function () {
    elige = Math.randomRange(1, 3)
    if (elige == 1) {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 9 9 . 9 9 9 9 . . 
. . . . . . 9 . 9 . 9 . . 9 . . 
. . 9 9 9 . 9 . 9 . 9 9 9 9 . . 
. . . . . . 9 . 9 . 9 . 9 . . . 
. . . . . . 9 9 9 . 9 . . 9 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -60, 0)
    } else if (elige == 2) {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f . f f f . 
. . . . . . . f . . f . f . f . 
. . . f f f . f f f f . f f f . 
. . . . . . . f . . f . f f . . 
. . . . . . . f . . f . f . f . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 60, 0)
    } else if (elige == 3) {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 7 . 7 7 7 7 7 . 
. . . . . . . . . . 7 . . . 7 . 
. . . . . . . . 7 . 7 . . . 7 . 
. . . 7 7 7 . . 7 . 7 7 7 7 7 . 
. . . . . . . . 7 . 7 . 7 . . . 
. . . . . . . . 7 . 7 . . 7 . . 
. . . . . . . . 7 . 7 . . . 7 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 55, 0)
    } else {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 . 2 2 2 2 . . 
. . . . . . 2 . . . 2 . . 2 . . 
. . . 2 2 . 2 . . . 2 2 2 . . . 
. . . . . . 2 2 2 . 2 . 2 2 . . 
. . . . . . 2 . . . 2 . . 2 . . 
. . . . . . 2 2 2 . 2 . . 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 50, 0)
        projectile.setKind(SpriteKind.conjugación)
    }
    projectile.y = Math.randomRange(10, 100)
})
