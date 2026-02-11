import initializeDurations from './duration.js'
import addSkillDialogBehavior from './resume.js'
import initDetailsState from './detailsState.js';
import darkLiteToggleInit from "./darkLiteModes";

document.addEventListener('DOMContentLoaded', () => {
    initializeDurations();
    addSkillDialogBehavior();
    initDetailsState();
    darkLiteToggleInit();

    // Add listener for logo click
    document.querySelector('.passive-logo .circle').addEventListener('click', () => document.location = '/');
});
