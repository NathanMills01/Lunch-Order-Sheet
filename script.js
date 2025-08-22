//console.log("If you're seeing this, then your app is running");
const cards = []; // store card objects
const form = document.getElementById("cardForm");
const cardsContainer = document.getElementById("cardsContainer");

// "database" of dropdown values → display text
const times = {
  JuniorLunch: "Junior Lunch - 11 AM",
  SeniorLunch: "Senior Lunch - 12 PM"
};

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // grab inputs
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dropdown = document.getElementById("itemDropdown");
  const time = times[dropdown.value]; // look up the text based on the dropdown value


  // create card object
  const newCard = { title, description, time };
  cards.push(newCard);

  // create card element in the DOM
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.innerHTML = `
    <p>${title}</p>
    <p>${description}</p>
    <p>${time}</p>
  `;

  cardsContainer.appendChild(cardDiv);

  form.reset(); // clear inputs after submission
});
