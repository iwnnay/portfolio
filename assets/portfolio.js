let openSkillDialog;
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.passive-logo .circle').addEventListener('click', () => document.location = '/');

    const slugName = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    const durations = document.getElementsByClassName('duration');
    const starts = document.getElementsByClassName('start');
    const ends = document.getElementsByClassName('end');

    if (durations.length === starts.length && durations.length === ends.length) {
        for (let i = 0; i < durations.length; i++) {
            const startDate = new Date(starts[i].innerText);
            const endDate = ends[i].innerText === 'Present' ? new Date() : new Date(ends[i].innerText);
            const duration = durations[i];

            let years = endDate.getFullYear() - startDate.getFullYear();
            let months;
            if (startDate.getMonth() < endDate.getMonth()) {
                months = endDate.getMonth() - startDate.getMonth()
            } else {
                months = 12 - startDate.getMonth() + endDate.getMonth();
                years -= 1;
            }

            duration.innerText = (years ? `${years} year${years > 1 ? 's' : ''} ` : '')
                + (months ? `${months} month${months > 1 ? 's' : ''} ` : '')

        }
    }

    const closeSkillDialog = () => {
        if (openSkillDialog) {
            openSkillDialog.close();
        }
    }

    for (let skillEl of document.getElementsByClassName('skill')) {
        const skill = skillEl.innerText;
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
});