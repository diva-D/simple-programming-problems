// Write function that translates a text to Pig Latin and back.English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’.“The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.

function pigLatinTranslator(str, bool) {  // bool checks "true" if needs to translate to pig latin, false if translate from 
    const arr = str.split(' ');
    const finalArr = [];
    if (bool) {
        arr.map(e => {
            /*
            Split each word into array
            remove the first letter
            if it's upper case (beginning of sentence) make it lowercase and convert the new first letter to uppercase
            add the first letter + 'ay' to the end of the array/word
            join array to make string
            add string to new array
            join new array to make complete string/sentence
            */
            let strArr = e.split('');
            let first = strArr.shift();
            if (first === first.toUpperCase()) {
                first = first.toLowerCase();
                strArr[0] = strArr[0].toUpperCase();
            }
            strArr.push(first + 'ay');
            const newStr = strArr.join('');
            finalArr.push(newStr);
        });
    } else {
        /*
        Split each word into array
        Remove the last two character ('ay')
        if first character is uppercase, convert it to lowercase and the last letter to uppercase
        move the last letter to the beginning of the array
        join array to make new word and add to final array
        join finally array to create new sentence
        */
        arr.map(e => {
            let strArr = e.split('');
            const strLength = strArr.length;
            while (strArr.length > strLength - 2) {
                strArr.pop();
            }
            let last = strArr.pop();
            let first = strArr[0];
            if (first === first.toUpperCase()) {
                strArr[0] = first.toLowerCase();
                last = last.toUpperCase();
            }
            strArr.unshift(last);
            const newStr = strArr.join('');
            finalArr.push(newStr);
        });
    }
    return finalArr.join(' ');
}

console.log(pigLatinTranslator("The quick brown fox", true));
console.log(pigLatinTranslator("Hetay uickqay rownbay oxfay", false));