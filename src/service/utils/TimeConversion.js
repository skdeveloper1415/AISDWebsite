export function convertTimeFormat(inputDateString) {

    const date = new Date(inputDateString);

    const options = { hour: 'numeric', minute: 'numeric', hour12: true};

    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);

    return formattedTime;
}