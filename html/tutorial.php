<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tutorial</title>
    <link rel="stylesheet" href="../styles/tutorial_styles.css">
    <link rel="stylesheet" href="../styles/animation.css">

    <!-- silkscreen font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    
    
    <div class="tutorial-slides">
        
        <div class="tut-slides-styling">
        <div id="text-box5" class="text-box">
            <div id="text-box5-ptag">
                <p>This is your <span style="color:blue">Mana</span> bar. You need <span style="color:blue">Mana</span> for some abilities,
                    and the <span style="color:blue">Mana</span> bar can be refilled by some moves. <span style="color:blue">Mana</span> can't be gained passively</p>
            </div>
        </div>
        <img src="../images/Slide5Tut.png" class="tutorial-slide5" alt="">
        </div>
        <div class="tut-slides-styling">
        <div id="text-box1" class="text-box">
            <div id="text-box1-ptag">
                <p>Welcome to the combat tutorial!</p>
            </div>
    </div>
        </div>
        <img src="../images/Slide1Tut.png" class="tutorial-slide1" alt="">
        
        <div class="tut-slides-styling">
        <div id="text-box2" class="text-box">
            <div id="text-box2-ptag">
                <p>These are the players' and enemies' <span style="color:green">Health</span>-bars and <span style="color:rgb(88, 88, 88)">armour</span>-bars.
                    The damage dealt goes through <span style="color:rgb(88, 88, 88)">armour</span> first, but some abilities are able to bypass <span style="color:rgb(88, 88, 88)">armour</span>, and deal direct damage</p>
            </div>
        </div>
        </div>
        <img src="../images/Slide2Tut.png" class="tutorial-slide2" alt="">
        
        <div id="text-box3" class="text-box">
            <div class="tut-slides-styling">
            <div id="text-box3-ptag">
                <p>This is the Activity Log. Here will all information about what happens in a turn be written down and accessable by the player to read.
                    It is important to read the log after every turn, or you won't be able to understand what happened in a turn.</p>
            </div>
            </div>
        </div>
        <img src="../images/Slide3Tut.png" class="tutorial-slide3" alt="">
        
        <div class="tut-slides-styling">
        <div id="text-box4" class="text-box">
            <div id="text-box4-ptag">
                <p>This is the most basic move, which also deals the least damage. If you don't have full <span style="color:blue">Mana</span>,
                    you will gain some back by using this move</p>
            </div>
            <div id="text-box4-ptag1">
                <p>This move is similar to Simple Slash, but it deals slightly more damage in exchange of giving you less <span style="color:blue">Mana</span> upon using it</p>
            </div>
            <div id="text-box4-ptag2">
                <p>Powerfull Swing has 50% chance of missing, as well as hitting. Landing the move rewards you with a higher damage output,
                    as it can be used as a great <span style="color:rgb(88, 88, 88)">armour</span> breaker</p>
            </div>
            <div id="text-box4-ptag3">
                <p>This Move is your ultimate ability. It uses a great amount of <span style="color:blue">Mana</span>, and deals a great amount of damage. If the ability is used while
                    the enemy still has <span style="color:rgb(88, 88, 88)">armour</span>, it will absorb most of the damage
                </p>
            </div>
            <div id="text-box4-ptag4">
                <p>Using Block will negate any damage done to you this turn, and has a Parry chance. If you hit a Parry you will lose <span style="color:blue">10 Mana</span> and
                    stun the enemy for 1 turn, but be aware that Block has a 25% chance of failing completely
                </p>
            </div>
            <div id="text-box4-ptag5">
                <p>Heal uses <span style="color:blue">15 Mana</span> and gives back a significant amount of <span style="color:green">Health</span>. This ability is most effective while you still have <span style="color:rgb(88, 88, 88)">armour</span>.
                    This ability can <span style="color:green">^Overheal</span>, which means you can gain more <span style="color:green">Health</span> than what you started with
                </p>
            </div>
            <div id="text-box4-ptag6">
                <p>By using Poison Stinger you can deal tiny damage to the enemies' <span style="color:rgb(88, 88, 88)">armour bar</span>, while also at the same
                    time penetrating it and dealing damage on the <span style="color:green">Health</span> bar. After the move, the enemy will be poisoned and take damage every turn for 5 turns.
                </p>
            </div>
            <div id="text-box4-ptag7">
                <p>Critical Stab is a move dealing heavy damage with a chance of <span style="color:rgb(255, 0, 0)">Bleed</span>, at a cost of <span style="color:blue">35 Mana</span>. The bleed
                effect can last some rounds depending on your luck, and when attacking you gain a chance of critical strikes and a BIG BONUS DAMAGE, though you will only know that you got the bonus after you've already gotten it</p>
                <p class="info-text"><span style="color: white; background-color: rgb(0, 0, 0); opacity: 20%;">Here's a small gift for taking time to read the tutorial: <span style="color: rgb(232, 0, 0); background-color: rgb(0, 0, 0); opacity: 70%">TYFORDOINGTUT</span></span></p>
            </div>
    </div>
        
        <img src="../images/Slide4Tut.png" class="tutorial-slide4" alt="">
    </div>
    </div>
        <button id="nextButton" class="custom-button">Next Page</button>
    
    
    
    <!-- Back to Menu button -->
    <div class="back-to-menu">
        <a href="menu.php"><button id="back-to-menu-button">Back to Main Menu</button></a>
    </div>

            <script type="module" src="../javascript/animation.js"></script>
</body>
</html>