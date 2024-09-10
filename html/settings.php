<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Settings</title>
    <style><?php include "../styles/combat_screen_styles.css" ?></style>

    <!-- silkscreen font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

    <h1>Game Settings</h1>
    <div class="settings">

        <label for="sound">Sound:</label>
        <select id="sound">
            <option value="on">On</option>
            <option value="off">Off</option>
        </select>

        <label for="difficulty">Game Difficulty:</label>
        <select id="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
        <label for="darkMode">Dark Mode:</label>
        <select id="darkMode">
            <option value="off">Off</option>
            <option value="on">On</option>
        </select>
        
        
        <button>Save Changes</button>
    </div>

<!-- Back to Menu button -->
<div class="back-to-menu">
    <a href="menu.php"><button class="info-text" id="back-to-menu-button">Back to Main Menu</button></a>
</div>

    <!-- Load in all the scripts -->
    <script type="module" src="../javascript/combat.js"></script>
</body>
</html>