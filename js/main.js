import initializeDurations from './duration.js'
import addSkillDialogBehavior from './resume.js'
import initDetailsState from './detailsState.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeDurations();
    addSkillDialogBehavior();
    initDetailsState();

    // Add listener for logo click
    document.querySelector('.passive-logo .circle').addEventListener('click', () => document.location = '/');
});
