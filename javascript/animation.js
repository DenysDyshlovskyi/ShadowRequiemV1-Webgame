//export animation from animation.js to other available modules
export function stabBarrageAN(duration) {
    document.getElementById('stab-barrage-animation').style.display = 'block'; // Show the image

    setTimeout(function() {
        document.getElementById('stab-barrage-animation').style.display = 'none'; // Hide the image after duration
    }, duration);
}

export function simpleSlashAN(duration) {
    document.getElementById('simple-slash-animation').style.display = 'block'; // Show the image

    setTimeout(function() {
        document.getElementById('simple-slash-animation').style.display = 'none'; // Hide the image after duration
    }, duration);
}

export function powerfullSwingAN(duration) {
    document.getElementById('powerfull-swing-animation').style.display = 'block'; // Show the image

    setTimeout(function() {
        document.getElementById('powerfull-swing-animation').style.display = 'none'; // Hide the image after duration
    }, duration);
}

export function cosmicBananaBlastAN(duration) {
    document.getElementById('cosmic-banana-blast-animation').style.display = 'block'; // Show the image

    setTimeout(function() {
        document.getElementById('cosmic-banana-blast-animation').style.display = 'none'; // Hide the image after duration
    }, duration);
}

export function poisonStingerAN(duration) {
    document.getElementById('poison-stinger-animation').style.display = 'block'; // Show the image

    setTimeout(function() {
        document.getElementById('poison-stinger-animation').style.display = 'none'; // Hide the image after duration
    }, duration);
}

let animationActive = true; // Variable to determine if animation is active
//poison damage effect animation
export function poisonLingerAN(turnOn) {
    if (turnOn) {
        document.getElementById('poison-linger-animation').style.display = 'block'; // Show the image
        animationActive = true;
    } else {
        document.getElementById('poison-linger-animation').style.display = 'none'; // Hide the image
        animationActive = false;
    }
}

export function blockSuccessAN(duration) {
    document.getElementById('block-success-animation').style.display = 'block'; // Show the image

    setTimeout(function() {
        document.getElementById('block-success-animation').style.display = 'none'; // Hide the image after duration
    }, duration);
}
export function blockFailedAN(duration) {
    document.getElementById('block-failed-animation').style.display = 'block'; // Show the image

    setTimeout(function() {
        document.getElementById('block-failed-animation').style.display = 'none'; // Hide the image after duration
    }, duration);
}
export function blockParryAN(duration) {
    document.getElementById('block-parry-animation').style.display = 'block'; // Show the image

    setTimeout(function() {
        document.getElementById('block-parry-animation').style.display = 'none'; // Hide the image after duration
    }, duration);
}

export function healingAN(duration) {
    document.getElementById('heal-animation').style.display = 'block'; // Show the image

    setTimeout(function() {
        document.getElementById('heal-animation').style.display = 'none'; // Hide the image after duration
    }, duration);
}

let bleedAnimationActive = true; // Variable to determine if animation is active
let bleedPlayerAnimationActive = true; // Variable to determine if animation is active
//bleeding enemy animation
export function bleedEffectAN(turnOn) {
    if (turnOn) {
        document.getElementById('bleed-animation').style.display = 'block'; // Show the image
        bleedAnimationActive = true;
    } else {
        document.getElementById('bleed-animation').style.display = 'none'; // Hide the image
        bleedAnimationActive = false;
    }
}
//bleeding player animation
export function bleedEffectPlayerAN(turnOn) {
    if (turnOn) {
        document.getElementById('bleed-player-animation').style.display = 'block'; // Show the image
        bleedPlayerAnimationActive = true;
    } else {
        document.getElementById('bleed-player-animation').style.display = 'none'; // Hide the image
        bleedPlayerAnimationActive = false;
    }
}


//TUTORIAL SLIDESHOW

document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0; // Start with the first slide
    const nextButton = document.getElementById('nextButton');
    const tutorialSlides = document.querySelectorAll('.tutorial-slides img');
    const textboxes = document.querySelectorAll('.text-box');
    const tutslidesstyling = document.querySelectorAll('.tut-slides-styling');
    

    nextButton.addEventListener('click', function() {
        tutorialSlides[currentSlide].style.display = 'none'; // Hide current slide
        
        textboxes[currentSlide].style.display = 'none'; // Hide current text box

        currentSlide = (currentSlide + 1) % tutorialSlides.length; // Move to the next slide

        tutorialSlides[currentSlide].style.display = 'block'; // Show next slide
        tutslidesstyling[currentSlide].style.display = 'block';
        textboxes[currentSlide].style.display = 'block'; // Show next text box

    });
});