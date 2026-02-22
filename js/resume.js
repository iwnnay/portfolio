import html2pdf from "html2pdf.js";

let openSkillDialog;
const slugName = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const initializeSkillDialogBehavior = () => {
    const closeSkillDialog = () => {
        if (openSkillDialog) {
            openSkillDialog.close();
        }
    }

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

}

export default initializeSkillDialogBehavior;
export {slugName};

const appendContactInfo = (container) => {
    const contactName = 'joe.imhoff';
    const h1 = document.createElement('h1');
    const symbol = '@';
    h1.innerHTML = 'Joe Imhoff';
    const domain = 'outlook.com';
    const pre = 847;
    const didit = 4499;
    const arc = 409;

    const contactLine = document.createElement('p');
    contactLine.innerHTML = `${contactName}${symbol}${domain} | (${pre}) ${arc}-${didit} | Elgin, IL`;
    const linkLine = document.createElement('p');
    linkLine.innerHTML = '<a href="https://joeimhoff.com">joeimhoff.com</a> | <a href="https://www.linkedin.com/in/joe-imhoff/">LinkedIn</a> | <a href="https://github.com/joeimhoff">GitHub</a>';
    container.append(h1, contactLine, linkLine,)
}

const appendLimitedExperience = (container) => {

}

const appendStyles = (container) => {
    const style = document.createElement('style');
    style.innerHTML = `
        h1 { margin: 0; padding: 0; }
        p { margin: 0; padding: 0; }
    `;
    container.append(style);
}

const downloadResume = () => {
    let container = document.createElement('div');
    container.style.margin = '20px';
    appendContactInfo(container);
    // concise statement
    // with my last 3 work experiences
    appendLimitedExperience(container)
    // education
    // ccertificates
    // skills?
    // trying to keep it all on one page
    appendStyles(container)

    html2pdf().from(container).save('joeimhoff_resume.pdf', {margin: 1});
}

window.downloadResume = downloadResume;