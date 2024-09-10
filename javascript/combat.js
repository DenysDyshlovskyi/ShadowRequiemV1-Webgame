//import custom animations from animation.js
import { stabBarrageAN } from "../javascript/animation.js";
import { simpleSlashAN } from "../javascript/animation.js";
import { powerfullSwingAN } from "../javascript/animation.js";
import { cosmicBananaBlastAN } from "../javascript/animation.js";
import { poisonStingerAN } from "../javascript/animation.js";
import { poisonLingerAN } from "../javascript/animation.js";
import { blockSuccessAN } from "../javascript/animation.js";
import { blockFailedAN } from "../javascript/animation.js";
import { blockParryAN } from "../javascript/animation.js";
import { healingAN } from "../javascript/animation.js";
import { bleedEffectAN } from "../javascript/animation.js";
import { bleedEffectPlayerAN } from "../javascript/animation.js";

let player = {
    name: "Player",
    abilities: [
        { name: "Simple Slash", damage: 5},/* husk å skru damage tilbake til 5 hvis den er på 200 etter testing */
        { name: "Stab Barrage", damage: 11},
        { name: "Powerfull Swing", damage: 25},
        { name: "Cosmic Banana Blast", damage: 50},
        { name: "Block", damage: 0},
        { name: "Heal", damage: 18},
        { name: "Poison Stinger", damage: 1},
        { name: "Critical Stab", damage: 20},
    ],
    /* player variables */
    health: 100,
    maxHealth: 100,
    cooldown: 3,
    isBlocking: false,
    poisonTick: 0,
    stun: false,
    mana: 100,
    maxMana: 100,
    armour: 150,
    maxArmour: 150,
    guaranteedFailure: 0,
    critChance: 0,
    bonusDamageChance: false,
    bleed: false,
    blockFailed: false,
    credit: parseInt(localStorage.getItem("Solace Shards")) || 0, // Retrieve from local storage or default to 0
    purchasedCharacters: JSON.parse(localStorage.getItem("purchasedCharacters")) || [],
};


// Define multiple enemy types with different stats and images
let enemyTypes = [
    { name: "Glitch Ghost", /* enemy1 variables */ 
    abilities: [
        { name: "Basic Attack", damage: 8 },
        { name: "Special Attack", damage: 14 },
        { name: "Heavy Attack", damage: 20 },
        { name: "Pierce Attack", damage: 7, },
        { name: "Bleed Attack", damage: 10, },
    ],   
    health: 100,
    maxHealth: 100,
    stun: false,
    armour: 150,
    maxArmour: 150,
    canBypassArmour: false, 
    bleed: false,
    creditDrop: true,
    credit: 75, 
    image: "GlitchGhost.gif" 
},
    { name: "Enemy2", /* enemy2 variables */ 
    abilities: [
        { name: "Basic Attack", damage: 8 },
        { name: "Special Attack", damage: 14 },
        { name: "Heavy Attack", damage: 20 },
        { name: "Pierce Attack", damage: 7, },
        { name: "Bleed Attack", damage: 10, },
    ],      
    health: 100,
    maxHealth: 200,
    stun: false,
    armour: 150,
    maxArmour: 150,
    canBypassArmour: false, 
    bleed: false,
    creditDrop: true,
    credit: 135,
    image: "Scornion.gif" 
},
{ name: "Enemy3", /* enemy3 variables */ 
    abilities: [
        { name: "Basic Attack", damage: 8 },
        { name: "Special Attack", damage: 14 },
        { name: "Heavy Attack", damage: 20 },
        { name: "Pierce Attack", damage: 7, },
        { name: "Bleed Attack", damage: 10, },
    ],      
    health: 50,
    maxHealth: 50,
    stun: false,
    armour: 450,
    maxArmour: 450,
    canBypassArmour: false, 
    bleed: false,
    creditDrop: true,
    credit: 435,
    image: "RoyalPaladin.webp" 
},
{ name: "Enemy4", /* enemy4 variables */ 
    abilities: [
        { name: "Basic Attack", damage: 8 },
        { name: "Special Attack", damage: 14 },
        { name: "Heavy Attack", damage: 20 },
        { name: "Pierce Attack", damage: 7, },
        { name: "Bleed Attack", damage: 10, },
    ],      
    health: 100,
    maxHealth: 600,
    stun: false,
    armour: 150,
    maxArmour: 250,
    canBypassArmour: false, 
    bleed: false,
    creditDrop: true,
    credit: 575,
    image: "Godlyator.gif" 
},
{ name: "Enemy5", /* enemy5 variables */ 
    abilities: [
        { name: "Basic Attack", damage: 8 },
        { name: "Special Attack", damage: 14 },
        { name: "Heavy Attack", damage: 20 },
        { name: "Pierce Attack", damage: 7, },
        { name: "Bleed Attack", damage: 10, },
    ],      
    health: 100,
    maxHealth: 1000,
    stun: false,
    armour: 150,
    maxArmour: 750,
    canBypassArmour: false, 
    bleed: false,
    creditDrop: true,
    credit: 1015,
    image: "Josef.gif" 
},
];





let currentEnemyIndex = 0; // Track the index of the current enemy
let enemy = enemyTypes[0]; // Starting with the first enemy type
//Starts with first enemy index
currentEnemyIndex = (currentEnemyIndex + 1) % enemyTypes.length;

// Function for updating to a new enemy after player wins
function defeatEnemy() {
    // Change enemy image
    document.querySelector('.enemy-model').src = `../images/${enemyTypes[currentEnemyIndex].image}`;

    // Reset enemy stats
    enemy = enemyTypes[currentEnemyIndex];
    enemy.health = enemyTypes[currentEnemyIndex].maxHealth;
    enemy.armour = enemy.maxArmour;
    
    // Display new enemy stats and enemy name
    document.getElementById('enemy-current-health').innerText = enemyTypes[currentEnemyIndex].health;
    document.getElementById('enemy-current-armour').innerText = enemyTypes[currentEnemyIndex].armour;
    document.getElementById('enemy-title').textContent = enemy.name;

    // Move to the next enemy type
    currentEnemyIndex = (currentEnemyIndex + 1) % enemyTypes.length;

    if (currentEnemyIndex === 5) {
        // Reset back to the first enemy if current index is 5
        currentEnemyIndex = 0;
    }
}

// Starts displaying the name of the first enemy in the list
function firstEnemy() {
    document.getElementById('enemy-title').textContent = enemy.name;
}
//runs the function to dispay first enemy
firstEnemy();




//Enemy attack logics and random ability
function getRandomAbility() {
    let randomIndex = Math.floor(Math.random() * enemyTypes[currentEnemyIndex].abilities.length);
    let enemyAbilityEffects = enemyTypes[currentEnemyIndex].abilities[randomIndex];

    //if player is bleeding
if (player.bleed == true) {
    player.health -= 2;
    if (Math.random() < 0.23) {
        console.log("You stopped Bleeding")
        player.bleed = false;
        bleedEffectPlayerAN(false);
}
}
    if (enemyAbilityEffects.name == "Bleed Attack") {
        //bleed effect chance
        if (player.bleed == false && Math.random() < 0.79 && enemy.stun == false) {
            console.log("Enemy used Bleed Attack")
            player.bleed = true;
            bleedEffectPlayerAN(true);
        }
    }



    return enemy.abilities[randomIndex];
}

// Function for player attack and actions
function playerAttack(ability) {

    //hides player container. go to enemyattack function for code for attack container visibility
    document.getElementById("attack-container").style.visibility = "hidden";

//Rules for crit chance and damage boost
if (player.critChance >= 1 && Math.random() <= 0.75) {
    console.log("Consecutive critical damage enabled");
    ability.damage += 2;
    if (player.critChance >= 2 && Math.random() <= 0.75) {
        player.bonusDamageChance = true;
    }
//check if bonus damage is available and if it is turn it off after applying bonus
if (player.bonusDamageChance == true) {
    ability.damage *= 3;
    console.log("DAMAGE BONUS x3.0!")
    //reset bonus damage and crit chance back to default
    player.bonusDamageChance = false;
    player.critChance = 0;

}
}
    if (ability.name === "Simple Slash") {
        console.log("You used Simple Slash");
        //Call in animation function from animation.js to animate the attack
        simpleSlashAN(650);
        //Armour Check
        if (enemy.armour >= 1) {
            enemy.armour -= ability.damage
        }
        else if (enemy.armour <= 0) {
            enemy.health -= ability.damage
        }
        //adds mana every time this attack is performed unless mana is full
        if (player.mana < 100) {
            player.mana += 10;
            console.log("+10 Mana Gained");
        }
        
    }

    if (ability.name === "Stab Barrage") {
        console.log("Stab Barrage");
        //Call in animation function from animation.js to animate the attack
        stabBarrageAN(800);
        //Armour Check
        if (enemy.armour >= 1) {
            enemy.armour -= ability.damage
        }
        else if (enemy.armour <= 0) {
            enemy.health -= ability.damage
        }
        //adds mana every time this attack is performed unless mana is full
        if (player.mana < 100) {
            player.mana += 4;
            console.log("+4 Mana Gained");
        }
    }

    if (ability.name === "Powerfull Swing") {
            
        if (Math.random() < 0.5) {
            console.log("Powerfull Swing Missed")
        }
        else {
            console.log("Powerfull Swing Hit")
            //Call in animation function from animation.js to animate the attack
            powerfullSwingAN(500);
        //Armour Check
        if (enemy.armour >= 1) {
            enemy.armour -= ability.damage
        }
        else if (enemy.armour <= 0) {
            enemy.health -= ability.damage
        }
        }
    }

	else if (ability.name === "Block") {
        
        //block chance, and resets guaranteed failure at block failure
        if (Math.random() < 0.25 || player.blockFailed == true) {
            console.log("Failed to Block")
            blockFailedAN(800);
            player.guaranteedFailure = 0;
            player.blockFailed = false;
        }
        //Guaranteed Failure Check
        else if (player.guaranteedFailure >= 2) {
            console.log("Blocked Damage");
            console.log("Next Block is guaranteed to fail!");
            player.blockFailed = true;
            player.guaranteedFailure = 0;
            //ensures player is still blocking
                blockSuccessAN(800);
                player.isBlocking = true;
        }
        else {
            //parry chance and mana check
            if (Math.random() < 0.25 && player.mana >= 10 && player.blockFailed == false) {
                console.log("Successfull Parry");
                blockParryAN(800);
                enemy.stun = true;
                enemy.canBypassArmour = false;
                player.mana -= 10;
                console.log("-10 Mana");
            }
            else if (player.blockFailed == false) {
                console.log("Blocked Damage")
                blockSuccessAN(800);
                player.isBlocking = true;
                //adds 1 to guaranteed failure counter
                player.guaranteedFailure++;
            }
            player.isBlocking = true;
            if (player.blockFailed == true) {
                player.guaranteedFailure = 0;
                player.blockFailed = false;
        }
}
    }

//Healing Ability with Mana usage
    else if (ability.name === "Heal") {
        //checks if player.mana is at least 15 or more
        if (player.mana >= 15) {
            console.log("Restored health successfully")
            healingAN(1400);
            player.health += ability.damage;
            updateHealthBars();
            player.mana -= 15;
            console.log("+30 Health")
            console.log("-15 Mana")
        }
        //if mana is under 15
        else if (player.mana < 15) {
            console.log("Not enough Mana")
            updateHealthBars();
        }
}

    //Poison ability
    else if (ability.name === "Poison Stinger" && player.mana >= 10) {
        console.log("Poison Attack")
        poisonStingerAN(500)
        //Armour Check
        if (enemy.armour >= 1) {
            enemy.armour -= ability.damage;
        }
        else if (enemy.armour <= 0) {
            enemy.health -= ability.damage;
        }
        enemy.health -= ability.damage;
        player.poisonTick= 5;
        player.mana -= 10;
        console.log("-10 Mana")
//poison effect for +4 rounds (Since it does first tick of poison this round)
}

    //if mana is under 10
    else if (ability.name === "Poison Stinger" && player.mana < 10) {
        console.log("Not enough Mana")
        updateHealthBars();
    }

    //Ultimate Ability called Cosmic Banana Blast
    else if (ability.name === "Cosmic Banana Blast") {
        //Checks if the ability is on cooldown and if player has enough mana
        if (player.cooldown >= 3 && player.mana >= 75) {
            player.cooldown = 0
            console.log("You used C.B.B! Enemy suffered great damage!")
            cosmicBananaBlastAN(4500);
                if (enemy.armour >= 1) {
                    console.log("Most of the damage absorbed by Armour")
                }
            console.log("-75 Mana");
            player.mana -=75;
            //Armour Check
            if (enemy.armour >= 1) {
                enemy.armour -= ability.damage;
            }
            else if (enemy.armour <= 0) {
                enemy.health -= ability.damage;
            }
        }

        //What happens if the player doesnt have enough mana and the ability is on cooldown
        else if (player.cooldown < 3) {
            if (player.cooldown < 3 && player.mana < 75) {
                console.log("Not enough Mana + Move is on cooldown")
            }
            else {
            console.log("On cooldown")
            }
        }
        //What happens if the player doesnt have enough mana to use the ability
        else if (player.mana < 75) {
            console.log("Not enough Mana")
        }


        updateHealthBars();
}
    //Poison attack tick damage every round
    if (player.poisonTick > 0) {
        console.log("Poison effect damage!");
        //Armour Check
        if (enemy.armour >= 1) {
            enemy.health -= 4;
        }
        else if (enemy.armour <= 0) {
            enemy.health -= ability.damage
            enemy.health -= 5;
        }
        player.poisonTick--;
        //annnounce the amount of rounds left of poison effect
        if (player.poisonTick === 4) {
            console.log("This effect will last for 4 more rounds")
            poisonLingerAN(true);
        }
        else if (player.poisonTick === 3) {
            console.log("This effect will last for 3 more rounds")
            
        }
        else if (player.poisonTick === 2) {
            console.log("This effect will last for 2 more rounds")
            
        }
        else if (player.poisonTick === 1) {
            console.log("This effect will last for 1 more round")
            
        }
        else if (player.poisonTick <= 0) {
            poisonLingerAN(false);
        }
    }

    if (ability.name === "Critical Stab") {
        if (player.mana >= 35) {
            console.log("Critical Stab!")
            powerfullSwingAN(600);
            //Armour Check
            if (enemy.armour >= 1) {
                enemy.armour -= ability.damage;
            }
            else if (enemy.armour <= 0) {
                enemy.health -= ability.damage;
            }
            player.mana -= 35;
            console.log("-35 Mana")
            
            //bleed effect chance
            if (enemy.bleed == false && Math.random() < 0.33) {
                console.log("Enemy is Bleeding!")
                bleedEffectAN(true);
                enemy.bleed = true;
            }
            
        }
        else if (player.mana < 35) {
            console.log("Not enough Mana")
            
        }
        
}





//End of round full update
updateHealthBars();
updateArmourBars();
updateManaBar();
player.cooldown++;




if (enemy.health <= 0) {
    document.getElementById("attack-container").style.visibility = "visible";
    defeatEnemy();
    endGame();
    if (enemy.creditDrop == true) {
        player.credit += enemy.credit; // Add Solace Shards if player kills enemy
        localStorage.setItem("Solace Shards", player.credit);
        console.log("You have defeated the enemy!");
        if (enemy.name == "Ghost") {
            console.log("+ A handfull of Solace Shards");
        }
        else if (enemy.name == "Enemy2") {
            console.log("+ A small pile of Solace Shards");
        }
        else if (enemy.name == "Enemy3") {
            console.log("+ A Big pile of Solace Shards");
        }
        else if (enemy.name == "Enemy4") {
            console.log("+ An enormous pile of Solace Shards");
        }
        else if (enemy.name == "Enemy5") {
            console.log("Elite Enemy Slain! Your reward is a plentifull amount of Solace");
        }
    }
    player.armour = player.maxArmour;
    player.health += 25;
    player.health = player.maxMana;
    player.mana = player.maxMana;
    updateCredit();
    defeatEnemy();
    updateHealthBars();
    updateArmourBars();
    updateManaBar();
    
} else {
    setTimeout(enemyAttack, 1000);
}


}








// Funksjon for fiendens angrep
function enemyAttack() {
    // Definer fiendens angrep, her kan du også legge til mer logikk for å gi fienden flere tilfeldige angrep.
    let attack = getRandomAbility();
    let damage = attack.damage;

    //Rules for bleed inflicted
    if (enemy.bleed == true) {
        enemy.health -= 2;
        if (Math.random() < 0.3) {
            console.log("Crit chance increased");
            player.critChance++;
        }
        if (Math.random() < 0.24) {
            console.log("Enemy stopped Bleeding")
            enemy.bleed = false;
            bleedEffectAN(false);
        }
    }
    
//Rules for Block, Stun and Armour damage
    if (enemy.stun === false) {

        if (player.isBlocking === true) {
            player.isBlocking = false;
        }
        else {
            if (player.armour < 1) {
            player.health -= damage;
            }
            else if (player.armour >= 1) {
                player.armour -= damage;
            }
        }
        //Enable Bypass armour effect chance
    if (enemy.canBypassArmour === false && Math.random() < 0.2 && Math.random() < 0.9) {
        enemy.canBypassArmour = true;
    }
    //Armour Pierce Attack logic with the canBypassArmour variable
    if (enemy.canBypassArmour === true && player.armour >= 0) {
        player.health -= 7;
        enemy.canBypassArmour = false;
        console.log("Enemy used Pierce Attack and"); console.log("pierced your Armour!");
        
    }
    }    
    //What happens if enemy is stunned
    else {
        enemy.stun = false;
        console.log("Enemy Stunned!");
    }
    
    // Update Bars
    updateHealthBars();
    updateArmourBars();

    //Enemy Wins
    if (player.health <= 0) {
        endGameEnemy();
        //player loses all credit after death
        localStorage.setItem("Solace Shards", 0);
    }

    //Player wins
if (enemy.health <= 0) {
    endGame();
} 
document.getElementById('attack-container').style.visibility = 'visible';
}



// funksjon for å oppdatere health bars
function updateHealthBars() {
    // Oppdater din healthbar
    let playerHealthBarWidth = (player.health <= 0) ? 0 : (player.health * 100 / player.maxHealth); // det her er berre en forenkla syntax på if/else
    document.getElementById('player-health').style.width = playerHealthBarWidth + '%';
    document.getElementById('player-current-health').textContent = player.health;
    if (player.health < 0) {
        player.health = 0;
    }

    // Oppdater fiendens healthbar
    let enemyHealthBarWidth = (enemy.health <= 0) ? 0 : (enemy.health * 100 / enemy.maxHealth); // det her er berre en forenkla syntax på if/else
    document.getElementById('enemy-health').style.width = enemyHealthBarWidth + '%';
    document.getElementById('enemy-current-health').textContent = enemy.health;
    if (enemy.health < 0) {
        enemy.health = 0;
    }
}


// Armour bar function
function updateArmourBars() {
    // Update players armour bar
    let playerArmourBarWidth = (player.armour <= 0) ? 0 : (player.armour * 100 / player.maxArmour); // det her er berre en forenkla syntax på if/else
    document.getElementById('player-armour').style.width = playerArmourBarWidth + '%';
    document.getElementById('player-current-armour').textContent = player.armour;
    if (player.armour < 0) {
        player.armour = 0;
    }

    // Update enemy's armour bar
    let enemyArmourBarWidth = (enemy.armour <= 0) ? 0 : (enemy.armour * 100 / enemy.maxArmour); // det her er berre en forenkla syntax på if/else
    document.getElementById('enemy-armour').style.width = enemyArmourBarWidth + '%';
    document.getElementById('enemy-current-armour').textContent = enemy.armour;
    if (enemy.armour < 0) {
        enemy.armour = 0;
    }
}

// Update armour bar
updateArmourBars();




/* Denne funksjonen legger alle tilgjengelige angrepene til spilleren inn i 
containeren slik at spilleren kan bruke angrepene */
function addAttacks(character) {
    let attackContainer = document.getElementById("attack-container");
    
    for (let i = 0; i < character.abilities.length; i++) {
        let ability = character.abilities[i];
        let button = document.createElement("button");
        button.textContent = ability.name;
        button.setAttribute("data-ability", JSON.stringify(ability));
        button.addEventListener("click", function() {
            let abilityData = JSON.parse(this.getAttribute("data-ability"));
            playerAttack(abilityData);
        });
        // Apply the CSS class to the dynamically created button
        button.classList.add("attack-button");

        attackContainer.appendChild(button);
    }
    }
// Legg til fleire event listeners for fleire knapper


updateHealthBars();
window.onload = addAttacks(player);




//function for manabar update
function updateManaBar() {
    let manaPercentage = (player.mana / 100) * 100;
    document.getElementById('mana-level').style.width = manaPercentage + '%';

    // Update the mana value indicator
    document.getElementById('current-mana').textContent = player.mana;

    if (player.mana > player.maxMana) {
        player.mana = player.maxMana;
    }
}

//update mana bar
updateManaBar();


/* Function to increase mana every second, scrapped for now
        // Function to increase mana every second
            function increaseMana() {
                setInterval(() => {
                    if (player.mana < 100) {
                        player.mana += 5; // You can change the amount by which mana increases per second
                        updateManaBar(); // Update the mana bar whenever mana changes
                    }
                }, 1000); // 1000ms = 1 second
            }
            increaseMana();
             */

// Call the function to start increasing mana every second




//intercept console.log() events
(function () {
    var oldLog = console.log;

    console.log = function () {
        if (arguments.length > 0 && typeof arguments[0] === 'string') {
            oldLog.apply(console, arguments);
            var message = arguments[0].replace(/(^console\.log$(["'])([^"']*)(["'])$;*$)/, '$2');
            
            var messageClass = '';

            // Style the message on announcement board based on the message in console.log("message")
            if (message.includes('Player')) {
                messageClass = 'player-message';
            } else if (message.includes('Bleed')) {
                messageClass = 'bleed-message';
            }
            /* "Your" is an exception. Any message with the keyword "Your" will be treated as a normal one */
            else if (message.includes('Your')) {
                messageClass = 'normal-message';
            }
            
            else if (message.includes('You')) {
                messageClass = 'player-message';
            } else if (message.includes('Enemy')) {
                messageClass = 'enemy-message';
            } else if (message.includes('Event:')) {
                messageClass = 'event-message';
            } else if (message.includes('Mana')) {
                messageClass = 'mana-message';
            } else if (message.includes('Health')) {
                messageClass = 'health-message';
            } else if (message.includes('Poison')) {
                messageClass = 'poison-message';
            } else if (message.includes('pierced')) {
                messageClass = 'pierce-message';
            } else if (message.includes('Armour')) {
                messageClass = 'armour-message';
            } else {
                messageClass = 'normal-message';
            }

            var messageElement = document.createElement('p');
            messageElement.textContent = message;
            messageElement.classList.add(messageClass);

            document.getElementById("message-container").appendChild(messageElement);

            // Scroll to the bottom of the announcement board
            var announcementBoard = document.getElementById('announcement-board');
            announcementBoard.scrollTop = announcementBoard.scrollHeight;
        }
    }
})();



//Function to Show that the player won
function endGame() {
    let message = 'Enemy Slain!';
    
    document.getElementById('winnerScreen-message').innerText = message;
    document.getElementById('winnerScreen-container').style.display = 'block';
    setTimeout(endGameRemoveScreen, 1000)
}

/*  Restart Game Button Scrapped for now */
/* document.getElementById('restart-button').addEventListener('click', function() {
    location.reload(); // Reloads the page to restart the game
}); */

//remove the Enemy Slain! box after 1,5 seconds
function endGameRemoveScreen() {
    document.getElementById('winnerScreen-container').style.display = 'none';
}

function endGameEnemy() {
    // turn on game over overlay screen
    document.getElementById('gameover-screen').style.display = 'block';

    // Redirect to menu.php after 1 second scrapped for now
    /* setTimeout(function() {
        window.location.href = 'menu.php';
    }, 3000); // 1000 milliseconds = 1 second */
}


// Check local storage for selected character
const selectedCharacter = localStorage.getItem('selectedCharacter');

// Update player model based on selected character
if (selectedCharacter) {
    const playerModel = document.querySelector('.player-model');
    playerModel.src = `../images/${selectedCharacter}`;

}





// Credits function
function updateCredit() {
    //update player credits
    document.getElementById("current-credit").textContent = localStorage.getItem("Solace Shards");
}

// Update credits
updateCredit();

// Update Health bar and armour bar for both player and enemy
updateArmourBars();
updateHealthBars();
updateArmourBars();