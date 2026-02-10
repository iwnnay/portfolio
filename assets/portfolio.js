const initializeDurations = () => {
    const durations = document.getElementsByClassName('duration');
    const starts = document.getElementsByClassName('start');
    const ends = document.getElementsByClassName('end');


    if (durations.length === starts.length && durations.length === ends.length) {
        for (let i = 0; i < durations.length; i++) {
            const startDate = new Date(starts[i].innerHTML);
            const endDate = ends[i].innerHTML === 'Present' ? new Date() : new Date(ends[i].innerHTML);
            const duration = durations[i];

            let years = endDate.getFullYear() - startDate.getFullYear();
            let months;

            if (startDate.getMonth() < endDate.getMonth()) {
                months = endDate.getMonth() - startDate.getMonth();
            } else {
                months = 12 - startDate.getMonth() + endDate.getMonth();
                years -= 1;
            }

            duration.innerHTML = (years ? `${years} year${years > 1 ? 's' : ''} ` : '')
                + (months ? `${months} month${months > 1 ? 's' : ''} ` : '');

        }
    }
};

let openSkillDialog;
const slugName = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const initializeSkillDialogBehavior = () => {
    const closeSkillDialog = () => {
        if (openSkillDialog) {
            openSkillDialog.close();
        }
    };

    for (let skillEl of document.getElementsByClassName('skill')) {
        const skill = skillEl.innerHTML;
        const slug = slugName(skill);
        if (!document.getElementById(slugName('skill-' + slug))) {
            console.log('need to add skill detail for ' + skill);
        }

        skillEl.addEventListener('click', () => {
            closeSkillDialog();

            openSkillDialog = document.getElementById(slugName('skill-' + slug));
            openSkillDialog.showModal();
        });
    }

    for (let closeBtn of document.getElementsByClassName('close-skill')) {
        closeBtn.addEventListener('click', () => closeSkillDialog());
    }

};

const setOpenSections = () => {
    let openSections = JSON.parse(localStorage.getItem('openDetails')) || [];
    openSections.forEach(sectionText => {
        document.querySelectorAll('summary').forEach(el => {
            if (el.innerHTML === sectionText) {
                el.parentElement.open = true;
            }
        });
    });
};

const storeOpenSections = () => {
    const openSections = [];
    document.querySelectorAll('details[open]').forEach(section => {
        const summaryText = section.querySelector('summary').textContent.trim();
        openSections.push(summaryText);
    });
    localStorage.setItem('openDetails', JSON.stringify(openSections));
};

const init = () => {
    setOpenSections();

    document.querySelectorAll('details').forEach((el) => {
        el.addEventListener('toggle', storeOpenSections);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initializeDurations();
    initializeSkillDialogBehavior();
    init();

    // Add listener for logo click
    document.querySelector('.passive-logo .circle').addEventListener('click', () => document.location = '/');
});
