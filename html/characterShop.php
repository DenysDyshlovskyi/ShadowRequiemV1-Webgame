<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Character Selection Screen</title>
<style><?php include "../styles/characterShop_styles.css" ?></style>

<!-- silkscreen font -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Character Selection Grid -->
<div class="grid">
    <div class="grid-item" data-character="GlitchGhost.gif">
        <img src="../images/GlitchGhost.gif" alt="GlitchGhost">
        <h3 class="info-text">Glitch Ghost</h3>
    </div>                                        
    <div class="grid-item" data-character="Scornion.gif" data-price="500">
        <img src="../images/Scornion.gif" alt="Scornion">
        <h3 class="info-text">Scornion</h3>
    </div>                                       <!-- Dont forget to specify what file format the character model is in data-character -->
    <div class="grid-item grid-item-locked" data-character="Lightbringer.webp" id="Lightbringer.webp" data-price="700">
        <!-- Webp image for partially transparrent pixels -->
        <img style="width: 232px;" src="../images/Lightbringer.webp" alt="Lightbringer">
        <h3 class="info-text">Lightbringer</h3>
        <div class="lock-icon">🔒</div>
    </div>                                                      <!-- Prise of the character if it hasn't been unlocked yet -->
    <div class="grid-item grid-item-locked" data-character="Godlyator.gif" id="Godlyator.gif" data-price="1500">
        <img src="../images/Godlyator.gif" alt="Godlyator">
        <h3 class="info-text">Godlyator</h3>
        <div class="lock-icon">🔒</div>
    </div>
    <div class="grid-item grid-item-locked" data-character="RoyalPaladin.webp" id="RoyalPaladin.webp" data-price="0">
        <img src="../images/RoyalPaladin.webp" alt="Royal Paladin">
        <h3 class="info-text">RoyalPaladin</h3>
        <div class="lock-icon">🔒</div>
    </div>
    <div class="grid-item grid-item-locked" data-character="RoyalPaladin.webp" data-price="7750">
        <img src="../images/RoyalPaladin.webp" alt="Royal Paladin">
        <h3 class="info-text">Royal Paladin</h3>
        <div class="lock-icon">🔒</div>
    </div>
    <div class="grid-item grid-item-locked" data-character="SoulCollector.webp" id="SoulCollector.webp" data-price="27000">
        <img src="../images/SoulCollector.webp" alt="Soul Collector">
        <h3 class="info-text">Soul-Collector</h3>
        <div class="lock-icon">🔒</div>
    </div>
    <div class="grid-item grid-item-locked" data-character="character2" data-price="0">
        <img src="../images/Scornion.gif" alt="Character 2">
        <h3 class="info-text">Character 2</h3>
        <div class="lock-icon">🔒</div>
    </div>
    <div class="grid-item grid-item-locked" data-character="character2">
        <img src="../images/Scornion.gif" alt="Character 2">
        <h3 class="info-text">Character 2</h3>
        <div class="lock-icon">🔒</div>
    </div>
    <div class="grid-item grid-item-locked" data-character="character2">
        <img src="../images/Scornion.gif" alt="Character 2">
        <h3 class="info-text">Character 2</h3>
        <div class="lock-icon">🔒</div>
    </div>
    <div class="grid-item grid-item-locked" data-character="character2">
        <img src="../images/Scornion.gif" alt="Character 2">
        <h3 class="info-text">Character 2</h3>
        <div class="lock-icon">🔒</div>
    </div>
    <div class="grid-item grid-item-secret" id="char-Josef" data-character="Josef.gif" data-price="6969">
        <img src="../images/Josef.gif" alt="Character 3">
        <h3 class="info-text">Josef (Secret Character)</h3>
        <div class="lock-icon">🔒</div>
    </div>
</div>

<!-- Credit display in top right corner -->
<div id="gameinfo-board">
    <div class="info-text">Solace Shards: <span id="current-credit">0</span></div>
    <button class="reset-button" onclick="hardReset()">Hard Reset</button>

</div>

<!-- Back to Menu button -->
<div class="back-to-menu">
    <a href="menu.php"><button class="info-text" id="back-to-menu-button">Back to Main Menu</button></a>
</div>

<script>
// Function to perform a hard reset of game data
    function hardReset() {
        localStorage.removeItem("purchasedCharacters");
        localStorage.removeItem("Solace Shards");
        localStorage.removeItem("characterUnlocked");
        localStorage.clear();
        alert('Game data has been reset.');
        location.reload();
    }

    //check if any secret characters have been unlocked and makes them visible
    if (localStorage.getItem("characterUnlocked", true)) {
        console.log("yuh");
        document.querySelector(".grid-item.grid-item-secret").classList.replace('grid-item-secret', 'grid-item-locked');
    }
    </script>
<script type="module" src="../javascript/menu.js"></script>
<script type="module"><?php include "C:/inetpub/wwwroot/javascript/menu.js" ?></script>
<script type="module"><?php include "C:/inetpub/wwwroot/javascript/combat.js" ?></script>
</body>
</html>
