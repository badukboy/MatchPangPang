Leaderboard
- storing of data is hosted on MongoLab using MongoDB.
- the code for displaying the leaderboard is in js/showLeaderBoard.js
- storing of the user and score is done in js/game.js on line:
- prompting the user for their name when the game is over is on line:

Layout:
- translate and level intro are combined in 1 template are located in the template folder.
- win/lose screen template is located in the template folder.

Sound
- the "pang" sound effect source file (FinalPang.mp3) is located in musics
- button click sound for main menu items is functional. the code is located in the index.html of the parent folder on lines 19 and 20 and is implemented to each button from lines 64-74 using the function "onmousedown"
- on/off button for background music is functional. the code is located on line 22-42 of the index.html file in the parent folder. To show the icon for this button, we used css and implemented in lines 7-14 in the index.html file in the parent folder.

Point system
- the addition/subtraction logic is implemented in js/game.js
- the total points calculated is implemented in js/game.js

Gameboard
- alphabet and number tiles are located in the gfx folder

Timer
- the timer is implemented in js/game.js