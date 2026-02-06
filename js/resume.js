let openSkillDialog;
const slugName = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const initializeSkillDialogBehavior = () => {
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

}

export default initializeSkillDialogBehavior;
export {slugName};

