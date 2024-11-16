const convertDateFormat = (isoDateString) => {

    const dateObject = new Date(isoDateString);

    // Custom function to format the month with short name and day with ordinal suffix
    const formatMonth = new Intl.DateTimeFormat('en-US', { month: 'short' }).format;
    const formatDay = new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format;

    // Function to add ordinal suffix to the day
    const addOrdinalSuffix = (day) => {
        const suffixes = ['th', 'st', 'nd', 'rd'];
        const v = day % 100;
        return day + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
    };

    // Options for toLocaleString
    const options = {
        //   year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    const optionsYear = {
        year: 'numeric',
    };

    // 2023, apr 23rd 12:23 pm
    // Format the date
    const formattedDate = `${dateObject.toLocaleString('en-US', optionsYear)}, ${formatMonth(dateObject)} ${addOrdinalSuffix(formatDay(dateObject))} ${dateObject.toLocaleString('en-US', options)}`;

    return formattedDate;
}

module.exports = {
    convertDateFormat
}