const initializeDurations = () => {
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
}
export default initializeDurations;