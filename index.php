<?php
if(isset($_POST['username'])){
    // Retrieves variables from last page
    $username = $_POST['username'];
    $playstyle = $_POST['play-style'];

    // Validates the user input for html/js injections
    $username = htmlspecialchars($username);
    $playstyle = htmlspecialchars($playstyle);
};
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Settings</title>
    <style><?php include "./styles/combat_screen_styles.css" ?></style>
    <script>
        // redirects user to menu.php if they have already typed in username
        var checkLocalUsername = localStorage.getItem("username");
        if(checkLocalUsername != null) {
            window.location = '../html/menu.php'
        }
    </script>

    <!-- silkscreen font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

    <h1 style="font-size: 150%; margin-top: 6%;">Welcome! Please register before playing</h1>
    <div class="settings">
        <form action="index.php" method="POST">
            <label for="username">Username: </label>
            <input type="text" id="username" name="username" placeholder="Enter your nickname / tag" required>

            <label for="sound">Do you want your game sound to be turn on or off?</label>
            <select id="sound">
                <option value="on">On</option>
                <option value="off">Off</option>
            </select>

            <label for="play-style">What do you intend to do in this version of the game?</label>
            <select id="play-style" name="play-style">
                <option value="casual">Just play the game</option>
                <option value="ranked">Competitive Play</option>
                <option value="testing">Bug-Test / Prototype-Test</option>
                <option value="testing">Developer mode</option>
            </select>

            <label for="acknowledgement">I have read and accepted the terms and conditions: 
                <input type="checkbox" id="acknowledgement" required>
            </label>
            
            <button type="submit" id="submitButton">I accept these conditions</button>
            <label for="submit">* By accepting you acknowledge our <a href="documents/agreement.txt"><span>terms and conditions.</span></a></label>
        </form>
    </div>

<!-- Back to Menu button -->
<div class="back-to-menu">
    <a href="html/menu.php"><button class="info-text" id="back-to-menu-button">Back to Main Menu</button></a>
</div>

    <!-- Load in all the scripts -->
    <script type="module" src="javascript/combat.js"></script>
</body>
</html>

<?php
if(isset($_POST['username'])){
    require __DIR__ . '/php/db_conn.php';

    //Checks if username is already taken.
    $sql = "SELECT * FROM players WHERE username = '$username'";

    $result = mysqli_query($conn, $sql);

    if($result->num_rows) {
        echo "<script>alert('Username already taken!')</script>";
    } else {
        // Puts the username inside localstorage
        echo "<script>localStorage.setItem('username', '$username')</script>";
        
        $sql = "INSERT INTO `players`(`username`, `playstyle`) VALUES ('$username','$playstyle')";

        $result = mysqli_query($conn, $sql);

        mysqli_close($conn);

        echo"<script>window.location = '../html/menu.php'</script>";
    };
};
?>