export const phases = [
  {id: 1, name: "Identificação de sinais", type: ["Psicológica"]},
  {id: 2, name: "Gestão de conflitos", type: ["Física","Patrimonial"]}
];
export let currentPhase = 0;

export function nextPhase() {
  if(currentPhase < phases.length-1) {
    currentPhase++;
    updatePhaseUI();
  } else {
    alert("Parabéns! Jogo concluído!");
  }
}

function updatePhaseUI() {
  document.getElementById("phase-name").textContent = `Fase: ${phases[currentPhase].id} - ${phases[currentPhase].name}`;
}
