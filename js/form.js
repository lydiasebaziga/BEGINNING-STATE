// Get the form
let form = document.querySelector(".form");

// Get the result elements
let resultMessage = document.querySelector(".result-message");
let resultNote = document.querySelector(".result-note");
let resultImage = document.querySelector(".result-image");


// Function to check the mood
function checkMood(mood) {

    if (mood === "happy") {

        return {
            message: "You are feeling happy! Keep smiling!",
            image: "https://cdn-icons-png.flaticon.com/512/742/742751.png",
            alt: "Happy face"
        };

    } else if (mood === "sad") {

        return {
            message: "It's okay to feel sad. Take some time for yourself.",
            image: "https://cdn-icons-png.flaticon.com/512/742/742752.png",
            alt: "Sad face"
        };

    } else if (mood === "calm") {

        return {
            message: "You are feeling calm. Enjoy this peaceful moment!",
            image: "https://cdn-icons-png.flaticon.com/512/5786/5786952.png",
            alt: "Calm face"
        };
    }
}


// Function to submit the form
function submitForm(event) {

    event.preventDefault();

    // Get the form data
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);

    // Get the mood and note
    let mood = data.mood;
    let note = data.feel;

    // Check the mood
    let result = checkMood(mood);

    // Show the results
    resultMessage.textContent = result.message;
    resultNote.textContent = note;
    resultImage.src = result.image;
    resultImage.alt = result.alt;
}


// Listen for the form submission
form.addEventListener("submit", submitForm);

