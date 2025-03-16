let hero = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(hero)
game.splash("Welcome to Animal Guesser!")
game.showLongText("Think of one of these animals: Dog, Cat, Lion, Snake, Frog, Shark, Whale, Eagle, and let the game guess which one are you thinking of.", DialogLayout.Center)
hero.sayText("Press A to start the Game!")
let answer = 1
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_event_pressed() {
    let answer2: boolean;
    let answer3: boolean;
    let answer4: boolean;
    if (answer) {
        // Dog, Cat, Lion, Snake, Frog
        answer2 = game.ask("Does it have fur? (y/n)")
        if (answer2) {
            // Dog, Cat, Lion
            answer3 = game.ask("Is it domesticated? (y/n)")
            if (answer3) {
                // Dog or Cat
                answer4 = game.ask("Does it bark? (y/n)")
                if (answer4) {
                    game.splash("It must be a Dog!")
                    game.gameOver(true)
                } else {
                    game.splash("It must be a Cat!")
                    game.gameOver(true)
                }
                
            } else {
                //  Lion
                game.splash("It must be a Lion!")
                game.gameOver(true)
            }
            
        } else {
            // Snake, Frog
            answer3 = game.ask("Is it a reptile? (y/n)")
            if (answer3) {
                game.splash("It must be a Snake!")
                game.gameOver(true)
            }
            
            answer3 = game.ask("Is it an amphibian? (y/n)")
            if (answer3) {
                game.splash("It must be a Frog!")
                game.gameOver(true)
            } else {
                answer2 = game.ask("Does it live in the ocean? (y/n)")
            }
            
        }
        
        if (answer2) {
            // Shark or Whale
            answer3 = game.ask("Is it a mammal? (y/n)")
            if (answer3) {
                game.splash("It must be a Whale!")
                game.gameOver(true)
            } else {
                game.splash("It must be a Shark!")
                game.gameOver(true)
            }
            
        } else {
            //  Eagle
            game.splash("It must be an Eagle!")
            game.gameOver(true)
        }
        
    }
    
})
