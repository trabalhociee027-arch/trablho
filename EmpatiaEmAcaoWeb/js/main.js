import {startDialogue, makeChoice} from './dialogue.js';
import {phases, currentPhase} from './phases.js';

window.makeChoice = makeChoice; // tornar global para HTML

startDialogue(phases[currentPhase].id);
