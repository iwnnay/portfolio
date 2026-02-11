const getCurrentMode = () => {
    const bodyTag = document.querySelector('body');
    return bodyTag.classList.contains('light') ? 'light' : 'dark';
}
const setMode = () => {
    const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    const currentMode = getCurrentMode();

    if (currentMode === 'light' && isDarkMode) {
        toggleMode();
    }
}

const toggleMode = () => {
    const currentMode = getCurrentMode();
    const oppositeMode = currentMode === 'light' ? 'dark' : 'light';

    switchMode(oppositeMode, currentMode);
}

const switchMode = (to, from) => {
    const bodyTag = document.querySelector('body');

    bodyTag.classList.add(to);
    bodyTag.classList.remove(from);

    localStorage.setItem('isDarkMode', JSON.stringify(to === 'dark'));
}

const darkLiteToggleInit = () => {
    setMode();
    document.querySelector('.mode-switch').addEventListener('click', () => toggleMode());
}
export default darkLiteToggleInit;