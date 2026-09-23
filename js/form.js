// Get the form
let form = document.querySelector(".form");

// Get the result elements
let resultMessage = document.querySelector(".result-message");
let resultNote = document.querySelector(".result-note");
let resultImage = document.querySelector(".result-image");

// Variables for our output
let output = "";
let imgAlt = "";
let imgSrc = "";

// addevenlisten for form submit
form.addEventListener("submit", function(event) {
event.preventDefault();
let formData = new FormData(form);
let data = Object.fromEntries(formData);
	console.log(data);
	
let mood = data.mood;
let note = data.feel;

console.log(mood);
console.log(note);


// if else statement 
if (mood === "happy") {

    output = "You are feeling happy! Keep smiling!";
    imgAlt = "Happy face emoji";
    imgSrc = "https://cdn-icons-png.flaticon.com/512/742/742751.png";

} else if (mood === "sad") {

    output = "It's okay to feel sad. Take some time for yourself.";
    imgAlt = "Sad face emoji";
    imgSrc = "https://cdn-icons-png.flaticon.com/512/742/742752.png";

} else if (mood === "calm") {

    output = "You are feeling calm. Enjoy this peaceful moment!";
    imgAlt = "Calm emoji";
    imgSrc = "https://cdn-icons-png.flaticon.com/512/5786/5786952.png";
}


// Update the HTML
resultMessage.textContent = output;
resultNote.textContent = note;
resultImage.src = imgSrc;
resultImage.alt = imgAlt;


});
