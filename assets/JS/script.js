const players = ["Keith", "Shaz", "Mike", "Ger"]; // Replace with your family names
const gameTypes = ["Easy", "Hard", "Matchplay"];
const totalCourses = 33;

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomCourseNumber() {
  let num = Math.floor(Math.random() * 32) + 1; // 1 to 32
  if (num >= 12) num += 1; // Skip 12
  return num;
}

function generateCourseAndGame() {
  document.getElementById("game").textContent = randomItem(gameTypes);
  document.getElementById("course").textContent = `#${randomCourseNumber()}`;
}

function generatePlayer() {
  document.getElementById("player").textContent = randomItem(players);
}
