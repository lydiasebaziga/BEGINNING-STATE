// These variables will hold the message and image info
let output = "";
let imgAlt = "";
let imgSrc = "";

// These variables connect to the elements in HTML where the results will show
let message = document.querySelector("#message");
let usersNote = document.querySelector("#users-note");
let moodImage = document.querySelector("#mood-image");
let results = document.querySelector("#results");

//connects to the form in the HTML
const form = document.querySelector("#mood-form");

//connects to the reset button in the HTML
let reset = document.querySelector("#reset");

// runs when the form is submitted
function onFormSubmit(event) {
  // prevents the page from refreshing when the form is submitted
  event.preventDefault();

  // removes any mood class that was added from the last submission
  results.classList.remove("happy");
  results.classList.remove("sad");
  results.classList.remove("calm");

  // Gets the information entered into the form
  const data = new FormData(event.target);

  // turns the form data into object
  const dataObject = Object.fromEntries(data.entries());

  // shows me the form data in the console
  //  console.log(dataObject);

  // Uses dot notation to get the mood and note from the object
  const mood = dataObject.mood;
  const note = dataObject.note;

  // Checks if the user selected Happy
  if (mood === "Happy") {
    // Sets the message and image info for Happy
    output = "Yay! Keep shining!😊";
    imgAlt = "Happy face emoji";
    imgSrc = "https://cdn-icons-png.flaticon.com/512/742/742751.png";

    // adds happy class to change the background color
    results.classList.add("happy");

    // Checks if the user selected Sad
  } else if (mood === "Sad") {
    //sets the message and image info for Sad
    output = "it's okay to feel sad. Sending hugs!💙";
    imgAlt = "Sad face emoji";
    imgSrc = "https://cdn-icons-png.flaticon.com/512/742/742752.png";

    // Adds the sad class to change background color
    results.classList.add("sad");

    // checks if the user selected Calm
  } else if (mood === "Calm") {
    // Sets message and image info for Calm
    output = "Breathe into the calmness.";
    imgAlt = "Calm face emoji";
    imgSrc = "https://cdn-icons-png.flaticon.com/512/5786/5786952.png";

    //adds the calm class to change the background color
    results.classList.add("calm");
  }

  //Updates heading with the mood message
  message.textContent = output;

  // updates paragraph with the user's note
  usersNote.textContent = note;

  // Adds image source to the image
  moodImage.src = imgSrc;

  //adds alternative text to the image
  moodImage.alt = imgAlt;

  // resets form fields after submitting
  form.reset();
}

// Runs the onFormSubmit function when form is submitted
form.addEventListener("submit", onFormSubmit);

// runs this function when reset button is clicked
reset.addEventListener("click", function () {
  // removes all mood classes and their background color
  results.classList.remove("happy");
  results.classList.remove("sad");
  results.classList.remove("calm");

  // clears the message
  message.textContent = "";

  //clears the user's note
  usersNote.textContent = "";

  // Clears the image source
  moodImage.src = "";

  // Clears image alt text
  moodImage.alt = "";
});
