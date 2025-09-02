export const dialogues = [
  {phaseId:1, lines:["Você percebe que sua colega está sendo humilhada.","Escolha como agir: 1) Ignorar 2) Conversar 3) Avisar um adulto"]}
];

export function startDialogue(phaseId) {
  const dialogue = dialogues.find(d => d.phaseId === phaseId);
  if(dialogue){
    document.getElementById("dialogue").innerHTML = dialogue.lines.join("<br>");
  }
}

export function makeChoice(choice) {
  if(choice === 2) {
    alert("Boa escolha! Empatia aumentada.");
    player.empatia += 1;
    document.getElementById("empatia").textContent = `Empatia: ${player.empatia}`;
  } else {
    alert("Escolha incorreta. Tente novamente.");
  }
}
