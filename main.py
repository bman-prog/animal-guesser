hero = sprites.create(img("""
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
"""), SpriteKind.player)
controller.move_sprite(hero)


game.splash("Welcome to Animal Guesser!")
game.show_long_text("Think of one of these animals: Dog, Cat, Lion, Snake, Frog, Shark, Whale, Eagle, and let the game guess which one are you thinking of.", DialogLayout.CENTER)

hero.say_text("Press A to start the Game!")
answer = 1

def on_event_pressed():
    if answer:
            #Dog, Cat, Lion, Snake, Frog
            answer2 = game.ask("Does it have fur? (y/n)")
            if answer2:
                #Dog, Cat, Lion
                answer3 = game.ask("Is it domesticated? (y/n)")
                if answer3:
                    #Dog or Cat
                    answer4 = game.ask("Does it bark? (y/n)")
                    if answer4:
                        game.splash("It must be a Dog!")
                        game.game_over(True)
                    else:
                        game.splash("It must be a Cat!")
                        game.game_over(True)
                else:
                    # Lion
                    game.splash("It must be a Lion!")
                    game.game_over(True)
            
            else:
                #Snake, Frog
                answer3 = game.ask("Is it a reptile? (y/n)")
                if answer3:
                    game.splash("It must be a Snake!")
                    game.game_over(True)
                answer3 = game.ask("Is it an amphibian? (y/n)")
                if answer3:
                    game.splash("It must be a Frog!")
                    game.game_over(True)
                else:
                    answer2 = game.ask("Does it live in the ocean? (y/n)")
            if answer2:
                #Shark or Whale
                answer3 = game.ask("Is it a mammal? (y/n)")
                if answer3:
                    game.splash("It must be a Whale!")
                    game.game_over(True)
                else:
                    game.splash("It must be a Shark!")
                    game.game_over(True)
            
            else:
                # Eagle
                game.splash("It must be an Eagle!")
                game.game_over(True)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_event_pressed)






