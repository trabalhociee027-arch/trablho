export const achievements = [
  {id:1,name:"Defensor da Igualdade",description:"Escolha correta na fase 1"}
];

export function unlockAchievement(id) {
  const ach = achievements.find(a => a.id === id);
  if(ach) alert(`Conquista desbloqueada: ${ach.name}`);
}
