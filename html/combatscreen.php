<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="enemy-title-title">Funky Frank The Fluffball Fiend</title>
    <!-- favicon -->
    <link rel="icon" type="image/x-icon" href="../images/greenarrow.ico">
    <style><?php include "../styles/combat_screen_styles.css" ?></style>
    <style><?php include "../styles/animation.css" ?></style>

    <!-- silkscreen font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap" rel="stylesheet">

    <!-- preload every animation -->
    <link rel="preload" href="../styles/combat_screen_styles.css" as="style">
    <link rel="preload" href="../javascript/combat.js" as="script">
    <link rel="preload" href="../images/stab-barrage-animation.gif" as="image">
    <link rel="preload" href="../images/simple-slash-animation.gif" as="image">
    <link rel="preload" href="../images/powerfull-swing-animation.gif" as="image">
    <link rel="preload" href="../images/cosmic-banana-blast-animation.gif" as="image">
    <link rel="preload" href="../images/poison-stinger-animation.gif" as="image">
    <link rel="preload" href="../images/poisoned-linger-animation.gif" as="image">
    <link rel="preload" href="../images/block-success-animation.gif" as="image">
    <link rel="preload" href="../images/block-failed-animation.gif" as="image">
    <link rel="preload" href="../images/block-parry-animation.gif" as="image">
    <link rel="preload" href="../images/heal-animation.gif" as="image">
    <link rel="preload" href="../images/bleed-animation.gif" as="image">

</head>
<body>
    <div class="header">
        <h1 id="enemy-title">Glitch Ghost</h1>
    </div>

    <!-- Mana bar -->
    <div id="mana-container">
    <div id="mana-bar">
        <div id="mana-level"></div>
    </div>
        <div class="info-text" id="mana-value">Mana: <span id="current-mana">100</span></div>
</div>


    <!-- Activity Log/ Announcement board -->
    <div id="announcement-board">
        <div id="message-container"></div>
    </div>
    
    <!-- Win/Lose Screen -->
    <div id="winnerScreen-container" class="winnerScreen">
        <div class="winnerScreen-content">
            <h2 id="winnerScreen-message"></h2>
            <!-- Restart Game -->
            <!-- <button id="restart-button">Restart Game</button> -->
            <!-- Register Score to leaderboard -->
            <!-- <button id="registerScore-button">Register Score to leaderboard</button> -->
            <!-- Back to Menu -->
            <!-- <button id="exit-button">Exit to Menu</button> -->
        </div>
    </div>
    
    <div class="UI_combatscreen_abilities" style="visibility: hidden;">
        <img class="UI_image" src="../images/UI_combatscreen_abilities.png" alt="">
    </div>

    <div class="player-container">
        <div class="player">
            <div class="info-text" id="player-armour-value">Armour: <span id="player-current-armour">150</span></div>
            <div class="info-text" id="player-health-value">Health: <span id="player-current-health">100</span></div>
            <div id="spell-info-player"></div>
            <img src="">
            <div class="armour-bar player" id="player-armour"></div>
            <div class="health-bar player" id="player-health"></div>
            <img style="width: 512px;" class="player-model" src="" alt="Player Model">
        </div>
    
        <div class="attack-container" id="attack-container">
        </div>
        
        <div class="enemy">
            <div class="info-text" id="enemy-armour-value">Armour: <span id="enemy-current-armour">150</span></div>
            <div class="info-text" id="enemy-health-value">Health: <span id="enemy-current-health">100</span></div>
            <div id="spell-info-enemy"></div>
            <div class="armour-bar enemy" id="enemy-armour"></div>
            <div class="health-bar enemy" id="enemy-health"></div>
            <img class="enemy-model" src="../images/GlitchGhost.gif" alt="Enemy Model">
        </div>
    </div>
    <!-- Credit display in bottom right corner -->
    <div id="gameinfo-board">
        <div class="info-text">Solace Shards: <span id="current-credit">0</span></div>
    </div>
    <!-- Back to Menu button -->
    <div class="back-to-menu">
        <a href="menu.php"><button class="info-text" id="back-to-menu-button">Back to Main Menu</button></a>
    </div>
    
    <!-- Load in all the scripts -->
    <script type="module" src="../javascript/combat.js"></script>
    <script type="module" src="../javascript/animation.js"></script>
    
    <!-- Animations for attacks -->
    <img id="stab-barrage-animation" src="../images/stab-barrage-animation.gif" style="display: none;" alt="animation">
    <img id="simple-slash-animation" src="../images/simple-slash-animation.gif" style="display: none;" alt="animation">
    <img id="powerfull-swing-animation" src="../images/powerfull-swing-animation.gif" style="display: none;" alt="animation">
    <img id="cosmic-banana-blast-animation" src="../images/cosmic-banana-blast-animation.gif" style="display: none;" alt="animation">
    <img id="poison-stinger-animation" src="../images/poison-stinger-animation.gif" style="display: none;" alt="animation">
    <img id="poison-linger-animation" src="../images/poisoned-linger-animation.gif" style="display: none;" alt="animation">
    <img id="block-success-animation" src="../images/block-success-animation.gif" style="display: none;" alt="animation">
    <img id="block-failed-animation" src="../images/block-failed-animation.gif" style="display: none;" alt="animation">
    <img id="block-parry-animation" src="../images/block-parry-animation.gif" style="display: none;" alt="animation">
    <img id="heal-animation" src="../images/heal-animation.gif" style="display: none;" alt="animation">
    <img id="bleed-animation" src="../images/bleed-animation.gif" style="display: none;" alt="animation">
    <img id="bleed-player-animation" src="../images/bleed-animation.gif" style="display: none;" alt="animation">


    <!-- Overlay for game over screen -->
    <div style="display: none; width: 100%; height: 100%; position: absolute; background-color: #bebebe;" id="gameover-screen">
        <button style="top: 35%; left: 45%; position: absolute;" onclick="location.reload()">Restart Game</button>
        <form action="menu.php" method="POST">
            <button style="top: 45%; left: 40.5%; position: absolute;" type="submit">Register score to leaderboard</button>
        </form>
        <button style="top: 55%; left: 45%; position: absolute;" onclick="location.href = 'menu.php';">Exit to Menu</button>
</div>
</body>
</html>