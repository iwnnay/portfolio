import initializeDurations from './duration.js'
import addSkillDialogBehavior from './resume.js'

document.addEventListener('DOMContentLoaded', () => {
    initializeDurations();
    addSkillDialogBehavior();

    // Add listener for logo click
    document.querySelector('.passive-logo .circle').addEventListener('click', () => document.location = '/');
});
