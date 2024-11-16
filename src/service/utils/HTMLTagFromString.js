const removeHTMLTagFromString = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || "No Description";
}

module.exports = {
    removeHTMLTagFromString
}