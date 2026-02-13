// ================= COUNTDOWN SYSTEM =================

document.addEventListener("DOMContentLoaded", function () {

  // 🔧 Toggle this for testing
  const testingMode = true; // change to true to test

  const releaseDate = testingMode
    ? new Date(Date.now() + 60000).getTime() // 1 minute test
    : new Date("February 14, 2026 16:00:00 GMT+0800").getTime();

  const countdownScreen = document.getElementById("countdownScreen");
  const formScreen = document.getElementById("formScreen");
  const timerElement = document.getElementById("countdownTimer");

  // Safety check
  if (!countdownScreen || !formScreen || !timerElement) return;

  const countdownInterval = setInterval(() => {

    const now = new Date().getTime();
    const distance = releaseDate - now;

    if (distance <= 0) {
      clearInterval(countdownInterval);

      // Fade out countdown
      countdownScreen.classList.add("fade-out");

      setTimeout(() => {
        countdownScreen.style.display = "none";

        formScreen.style.display = "block";
        formScreen.classList.add("fade-in");

      }, 600);

      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    timerElement.innerText =
`Only ${days} days,
${hours} hours,
${minutes} minutes,
${seconds} seconds
until something magical 💕`;

  }, 1000);

});

// ================= GLOBAL STATE =================
let noClickCount = 0;
let isFinalized = false;
const secretName = "Karen";

const sadCat = [
  "img/img1.jpeg",
  "img/img2.jpeg",
  "img/img3.jpeg",
  "img/img4.jpeg"
];

const blackmail = [
  "Please",
  "I'm begging you",
  "I'm crying",
  "I'm sad",
  "HUHUHUHU",
  "Please Say Yes"
];

// ================= FORM =================
function showLove() {
  const name = document.getElementById("nameInput").value.trim();
  const loader = document.getElementById("loader");
  const result = document.getElementById("result");
  const formScreen = document.getElementById("formScreen");
  const valentineScreen = document.getElementById("valentineScreen");

  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";

    if (name.toLowerCase() !== secretName.toLowerCase()) {
      result.style.display = "block";
      result.innerText = "It must not be you 💔";
      formScreen.classList.add("shake");
      return;
    }

    formScreen.classList.add("fade-out");

    setTimeout(() => {
      formScreen.style.display = "none";
      valentineScreen.style.display = "block";
      valentineScreen.classList.add("fade-in");
    }, 600);

  }, 1200);
}

// ================= YES =================
function sayYes() {
  if (isFinalized) return;

  if (noClickCount < 5) {
    alert("😏 Don't say yes immediately.");
    return;
  }

  isFinalized = true;

  const loader = document.getElementById("finalLoader");
  const loaderText = document.getElementById("loaderText");
  const question = document.getElementById("valentineQuestion");
  const buttons = document.getElementById("valentineButtons");
  const blackmailText = document.getElementById("blackmailText");
  const image = document.getElementById("valentineImage");
  const finalButton = document.getElementById("finalButton");

  buttons.style.display = "none";
  blackmailText.style.display = "none";

  loaderText.innerText = "Preparing something special 💖";
  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";

    image.src = "img/person.jpg";

    const message = `
💖 ${secretName}, you finally said YES.

You are officially my Valentine 💌

And guess what…
I have a surprise for you 🎁

Please click Continue below 💕
`;

    question.classList.add("typewriter-font");

    typeWriter(message, question, 35, () => {
      finalButton.style.display = "inline-block";
    });

  }, 2500);
}

// ================= NO =================
function sayNo() {
  if (isFinalized) return;

  noClickCount++;

  const valentineScreen = document.getElementById("valentineScreen");
  const image = document.getElementById("valentineImage");
  const question = document.getElementById("valentineQuestion");
  const blackmailText = document.getElementById("blackmailText");

  // 🔥 Shake effect
  valentineScreen.classList.remove("shake");
  void valentineScreen.offsetWidth; // force reflow (important!)
  valentineScreen.classList.add("shake");

  // Change image randomly
  image.src = sadCat[Math.floor(Math.random() * sadCat.length)];

  // Change question
  question.innerText = "🥺 Are you sure?";

  // Random emotional text
  blackmailText.innerText =
    blackmail[Math.floor(Math.random() * blackmail.length)];
}

// ================= CONTINUE =================
function continueLove() {
  const loader = document.getElementById("finalLoader");
  const loaderText = document.getElementById("loaderText");
  const valentineScreen = document.getElementById("valentineScreen");

  loaderText.innerText =
    "Please wait... your surprise is being prepared 💖";

  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";

    valentineScreen.classList.add("fade-out");

    setTimeout(() => {
      valentineScreen.style.display = "none";
      showFlowerSurprise();
    }, 600);

  }, 2500);
}

// ================= FLOWER SURPRISE =================
function showFlowerSurprise() {
  const surprise = document.createElement("div");
  surprise.className = "card fade-in";
  surprise.id = "flowerScreen";

  surprise.innerHTML = `
    <img src="img/flower.png" class="valentine-img">
    <h1 id="surpriseMessage" class="typewriter-font"></h1>
    <button id="secondContinue" class="final-btn">Continue 💌</button>
  `;

  document.body.appendChild(surprise);

  const message = `
🌸 Tada! Flowers for you! 🌸

I hope these brighten your day 💐

But wait…
I have another surprise 👀

Click Continue below 💕
`;

  const element = document.getElementById("surpriseMessage");
  const button = document.getElementById("secondContinue");

  typeWriter(message, element, 40, () => {
    button.style.display = "inline-block";
  });

  button.onclick = nextSurprise;
}

// ================= SECOND CONTINUE =================
function nextSurprise() {
  const loader = document.getElementById("finalLoader");
  const loaderText = document.getElementById("loaderText");

  loaderText.innerText =
    "Please wait... your surprise is being prepared 💖";

  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";

    showFinalSurprise();

  }, 2500);
}

// ================= FINAL LOVE LETTER =================
function showFinalSurprise() {
  const flowerScreen = document.getElementById("flowerScreen");
  if (flowerScreen) flowerScreen.remove();

  const finalCard = document.createElement("div");
  finalCard.className = "card fade-in";

  finalCard.innerHTML = `
    <img src="img/fav_flower.jpg" class="valentine-img final-surprise-img">

    <div class="letter">
      <div class="letter-content">
        <h2 id="finalFinalMessage" class="typewriter-font"></h2>
      </div>
    </div>
  `;

  document.body.appendChild(finalCard);

  const finalMessage = `
My Dearest 💖

From this day forward,
you are my favorite notification,
my favorite smile,
and my favorite person.

Happy Valentine’s Day 😌💘
`;

  launchConfetti();

  typeWriter(finalMessage, document.getElementById("finalFinalMessage"), 40);
}

// ================= TYPEWRITER =================
function typeWriter(text, element, speed, callback) {
  element.innerHTML = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      callback();
    }
  }

  typing();
}

// ================= CONFETTI =================
function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      ["#ff4d6d", "#ff9a9e", "#ffd6e0", "#ffffff"]
      [Math.floor(Math.random() * 4)];

    confetti.style.animationDuration =
      2 + Math.random() * 2 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}
