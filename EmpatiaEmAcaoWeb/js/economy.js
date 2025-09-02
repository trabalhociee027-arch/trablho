export function addPoints(amount){
  player.points += amount;
  document.getElementById("points").textContent = `Pontos: ${player.points}`;
}
