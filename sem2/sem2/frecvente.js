const getLetterFrequencies = (text) => {
    const result = {}
    const letters = text.split('') 

    for (let letter of letters) {
        if (letter === ' ') continue 

        if (letter in result) {
            result[letter]++
        } else {
            result[letter] = 1
        }
    }

    // calculăm frecvențele relative
    const totalLetters = letters.filter(ch => ch !== ' ').length

    for (let letter in result) {
        result[letter] /= totalLetters
    }

    return result
}

const sampleString = 'the quick brown fox jumps over the lazy dog'
console.log(getLetterFrequencies(sampleString))
