let secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const guess = Number(document.getElementById("guess").value);
  const result = document.getElementById("result");

  if (guess === secretNumber) {
    result.innerText = "Oikein! 🎉";
  } else if (guess > secretNumber) {
    result.innerText = "Liian iso 👆";
  } else {
    result.innerText = "Liian pieni 👇";
  }
}
function newGame() {
  // 1. uusi numero
  secretNumber = Math.floor(Math.random() * 10) + 1;

  // 2. tyhjennä input (vanha arvaus pois)
  document.getElementById("guess").value = "";

  // 3. tyhjennä tulos (vanha viesti pois)
  document.getElementById("result").innerText = "";
}