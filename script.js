//console.log("If you're seeing this, then your app is running");
const cards = []; // stores all card objects
const form = document.getElementById("cardForm");
const cardsContainer = document.getElementById("cardsContainer");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const time = document.getElementById("time").value; // grab time

  // create a card object and store it
  const newCard = { title, description, time, triggered: false };
  cards.push(newCard);

  // create the DOM element
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
    <p>Time: ${time}</p>
  `;
  cardsContainer.appendChild(cardDiv);

  form.reset();
});

// optional: check card times and play sound
const audio = new Audio("your-sound-file.mp3");

setInterval(() => {
  const now = new Date();
  const currentTime = now.getHours().toString().padStart(2,'0') + ':' +
                      now.getMinutes().toString().padStart(2,'0');

  cards.forEach(card => {
    if (!card.triggered && card.time === currentTime) {
      audio.play();        // play sound
      card.triggered = true; // prevent repeated triggers
    }
  });
}, 1000);
