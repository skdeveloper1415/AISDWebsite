const removeHTMLTagFromStringNew = (htmlString, ifEmpty='No Description') => {

    let cleanText = htmlString?.replace(/<\/?[^>]+(>|$)/g, "");
    return cleanText || ifEmpty;
}

module.exports = {
    removeHTMLTagFromStringNew
}