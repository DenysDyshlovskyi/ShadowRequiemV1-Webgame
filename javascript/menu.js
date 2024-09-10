// Check which items you already have purchased, and removes lock icon from them
function checkArray() {
    var characterarray = JSON.parse(localStorage.getItem("purchasedCharacters"));

    if (characterarray !== null) {
        characterarray.forEach(Element => {
            console.log(Element);
            var character = document.getElementById(Element);
            if (character) {
                character.classList.remove('grid-item-locked');
            } else {
                console.log("Element with ID " + Element + " not found in the document.");
            }
        });
    } else {
        console.log("No purchased characters found in localStorage.");
    }
}

checkArray();


// Get player information from local storage or create a new player object
let player = {
    credit: parseInt(localStorage.getItem("Solace Shards")) || 0,
    purchasedCharacters: JSON.parse(localStorage.getItem("purchasedCharacters")) || [],
};

// Get all grid items
const gridItems = document.querySelectorAll('.grid-item');

// Add click event listener to grid items
gridItems.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('grid-item-locked')) {
            const characterPrice = parseInt(item.dataset.price);
            if (player.credit >= characterPrice) {
                player.credit -= characterPrice;
                item.classList.remove('grid-item-locked');
                player.purchasedCharacters.push(item.dataset.character); // Add purchased character to the list
                localStorage.setItem("Solace Shards", player.credit);
                localStorage.setItem("purchasedCharacters", JSON.stringify(player.purchasedCharacters));
                updateCredit();
            } else {
                alert('You do not have enough credits to unlock this character.');
            }
        } else {
            gridItems.forEach(gridItem => gridItem.classList.remove('selected'));
            item.classList.add('selected');
            localStorage.setItem('selectedCharacter', item.dataset.character);
            window.location.href = 'combatscreen.php';
        }
    });
});

// Credits function
function updateCredit() {
    //update player credits
    document.getElementById("current-credit").textContent = localStorage.getItem("Solace Shards");
}

// Update credits
updateCredit();

