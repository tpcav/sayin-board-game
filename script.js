// JavaScript
const spinButton = document.getElementById("spinButton");
const winner = document.getElementById("winner");

spinButton.addEventListener("click", function() {
  const players = [];
  for (let i = 1; i <= 7; i++) {
    const player = document.getElementById(`player${i}`).value;
    if (player) {
      players.push(player);
    }
  }
  if (players.length > 0) {
    const randomIndex = Math.floor(Math.random() * players.length);
    winner.textContent = `${players[randomIndex]}`;
  } else {
    alert("Please enter at least one player.");
  }
});

const questions = [
  "Name a place you've always wanted to visit.",
  "Describe your perfect day.",
  "Name a person you admire and why.",
  "Share a funny childhood memory.",
  "Name a book, movie, or TV show that had a big impact on you.",
  "Share a memorable travel experience.",
  "Describe your dream job.",
  "Name a skill or hobby you've always wanted to learn.",
  "Share a memorable moment with a loved one.",
  "Describe your perfect vacation.",
  "Name a place you've always wanted to live.",
  "Share a funny or embarrassing moment from your past.",
  "Describe your dream home.",
  "Name a celebrity you would love to meet.",
  "Share a memorable experience from your childhood.",
  "Describe your perfect weekend.",
  "Name a person who has had a big impact on your life.",
  "Share a memorable moment from your college or university days.",
  "Describe your dream vacation.",
  "Name a place you've always wanted to visit with your family.",
  "Share a memorable moment from a past holiday celebration.",
  "Describe your dream romantic getaway.",
  "Name a person you look up to and why.",
  "Share a memorable moment from a past family gathering.",
  "Describe your dream adventure."
];

const generateButton = document.getElementById("generate-button");
const questionElement = document.getElementById("question");

generateButton.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];
  questionElement.textContent = randomQuestion;
});

