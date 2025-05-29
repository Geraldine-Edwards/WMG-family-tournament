const players = ["Keith", "Shaz", "Mike", "Ger"]; // Replace with your family names
const gameTypes = ["Easy", "Hard", "Matchplay"];
const totalCourses = 33;

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomCourseNumber() {
  return Math.floor(Math.random() * totalCourses) + 1; // 1 to 33
}

function generateCourseAndGame() {
  document.getElementById("game").textContent = randomItem(gameTypes);
  document.getElementById("course").textContent = `#${randomCourseNumber()}`;
}

function generatePlayer() {
  document.getElementById("player").textContent = randomItem(players);
}
