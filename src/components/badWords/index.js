import { badWords } from '../constant/badWords'


export const badWordFilter = (inputText) => {
    //replace bad word with "*"
    const replace = (text) => {
        const splitedText = text.split(' ')
        const replace = splitedText.map(item => {
            return '*'.repeat(item.length)
        }).join(' ')
        return replace
     }

     
    if(inputText){
        let str = inputText;
        badWords.map((item) => {
            str = str.replace(
            new RegExp(`\\b${item}\\b`, "gi"),
            replace(item)
            );
        });

        return str;
    }

    return inputText
}