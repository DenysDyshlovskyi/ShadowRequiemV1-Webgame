<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shadow Requiem: Fallen Heroes</title>
    <style><?php include "../styles/menu_styles.css" ?></style>

    <!-- silkscreen font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <div id="gift-input">
        <input id="text-input" value="" type="text" placeholder="Enter Code here and press enter to redeem gift">
        <input type="button" value="Submit" onclick="redeemCode()">
        <button onclick="hardReset()">Reset Codes</button>
    </div>
    
    <div class="menu-container">
    
        <h1>Shadow Requiem: Fallen Heroes</h1>
        <ul>
            <li><a class="info-text" href="combatscreen.php">Start Game</a></li>
            <li><a class="info-text" href="characterShop.php">Character Shop</a></li>
            <li><a class="info-text" href="tutorial.php">Tutorial (Recommended)*</a></li>
            <li><a class="info-text" href="leaderboard.php">Leaderboard</a></li>
            <li><a class="info-text" href="settings.php">Settings (In-dev)</a></li>
            <li><a class="info-text" href="credits.php">Credits List</a></li>
            <p class="info-text">*Disclaimer -- The Tutorial is heavily outdated and may not visually match with the actual gameplay</p>
        </ul>
        
    </div>

<!-- Back to Login  -->
<div class="back-to-login">
    <a href="../index.php"><button class="info-text" id="back-to-login-button">Back to Login</button></a>
</div>


    <script>
    // Define specific valid codes that can be redeemed
const validCodes = ['FREESHARDS', 'JOSEFSTJALCOLA', 'EARLYTESTER', 'TYFORDOINGTUT', 'DEVCODESHARDS'];

// Function to redeem a code
function redeemCode() {
    let inputField = document.getElementById('text-input');
    let code = inputField.value.trim().toUpperCase(); // Convert input to uppercase

    if (code === '') {
        alert('Please enter a valid gift code.');
        return;
    }

    // Retrieve redeemed codes from localStorage
    let redeemedCodes = JSON.parse(localStorage.getItem('redeemedCodes')) || [];

    // Check if the code is valid and has not been redeemed
    if (!validCodes.includes(code)) {
        alert('Invalid code. Please enter a valid gift code.');
        return;
    }

    if (redeemedCodes.includes(code)) {
        alert('This code has already been redeemed.');
        return;
    }

    // Simulating code redemption (you can replace this with your actual redemption logic)
    alert(`Code "${code}" redeemed successfully!`);
    if (code == 'FREESHARDS') {
        console.log('Claimed 2500 free Solace Shards');
        let currentShards = parseInt(localStorage.getItem("Solace Shards")) || 0;
        localStorage.setItem("Solace Shards", currentShards + 2500);
    }
    else if (code == 'EARLYTESTER') {
        //Reskin of character ..?
    }
    else if (code == 'JOSEFSTJALCOLA') {
        // Display new secret character Josef in shop
        localStorage.setItem("characterUnlocked", true);
        if (localStorage.getItem("characterUnlocked", true)) {
            console.log("Det funker");
        }
    }
    else if (code == 'TYFORDOINGTUT') {
        console.log('Claimed 225 Solace Shards as a reward for completing tutorial');
        let currentShards = parseInt(localStorage.getItem("Solace Shards")) || 0;
        localStorage.setItem("Solace Shards", currentShards + 225);
    }
    else if (code == 'DEVCODESHARDS') {
        console.log('Successfully claimed Developer Code for Solace Shards');
        let currentShards = parseInt(localStorage.getItem("Solace Shards")) || 0;
        localStorage.setItem("Solace Shards", currentShards + 9999);
    }

    // Add the redeemed code to the list
    redeemedCodes.push(code);

    // Update redeemed codes in localStorage
    localStorage.setItem('redeemedCodes', JSON.stringify(redeemedCodes));

    // Clear the input field
    inputField.value = '';
}

// Function to hard reset and clear all redeemed codes AND their associated CHARACTERS
function hardReset() {
    localStorage.removeItem('redeemedCodes');
    localStorage.removeItem("characterUnlocked");
    alert('All redeemed codes have been reset.');
}

// Event listener to redeem code on enter key
document.getElementById("text-input").addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        redeemCode();
    }
});

    </script>
    <script type="module" src="../javascript/combat.js"></script>
</body>
</html>