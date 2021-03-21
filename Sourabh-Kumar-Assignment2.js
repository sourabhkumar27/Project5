const sampleText = "Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense.";

function wordCount(sampleText){                          // for counting total number of words
    return sampleText.split(' ').length;
}

function differentWordCount(sampleText){                 // for counting number of unique words
    const setObj = new Set(sampleText.split(' '));          
    return setObj.size;
}

function mostOccurringWord(sampleText){                   // for counting most occurred word       
    let max = 0;
    let maxChar = ' ';
    sampleText.split(' ').forEach((word) => {
        if(sampleText.split(word).length > max){
            max++;
            maxChar = word;
        }
    })
    return `The most commonly occurring word is "${maxChar}", it appears ${max} times.`;
}

function numberOfVowels(sampleText){                     // for counting total number of vowels
    let vowelCount = 0;
    const vowels = "aeiou";

    for(let i = 0; i < sampleText.length; i++){
        if(vowels.indexOf(sampleText[i].toLowerCase()) > -1){
            vowelCount++;
        }
    }
    return vowelCount;
}

function numberOfPunctuation(sampleText){                // for counting total number of punctuations
    let punctuationCount = 0;
    let punctuation = ",.;";

    for(let i = 0; i < sampleText.length; i++){
        if(punctuation.indexOf(sampleText[i]) > -1){
            punctuationCount++;
        }
    }
    return punctuationCount;
}


console.log(`There are a total of ${wordCount(sampleText)} words in the paragraph. ${differentWordCount(sampleText)} of them are unique.`);
console.log(`There are ${numberOfVowels(sampleText)} vowels in the paragraph and ${numberOfPunctuation(sampleText)} pieces of punctuations.`);
console.log(`${mostOccurringWord(sampleText)}`);