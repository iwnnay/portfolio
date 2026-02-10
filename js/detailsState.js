const setOpenSections = () => {
    let openSections = JSON.parse(localStorage.getItem('openDetails')) || [];
    openSections.forEach(sectionText => {
        document.querySelectorAll('summary').forEach(el => {
            if (el.innerHTML === sectionText) {
                el.parentElement.open = true;
            }
        });
    });
}

const storeOpenSections = () => {
    const openSections = [];
    document.querySelectorAll('details[open]').forEach(section => {
        const summaryText = section.querySelector('summary').textContent.trim();
        openSections.push(summaryText);
    });
    localStorage.setItem('openDetails', JSON.stringify(openSections));
}

const init = () => {
    setOpenSections();

    document.querySelectorAll('details').forEach((el) => {
        el.addEventListener('toggle', storeOpenSections);
    });
}

export default init;