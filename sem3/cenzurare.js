function censorText(text, dictionary) {
    return text
        .split(" ")
        .map(word => dictionary.includes(word) ? word[0] + "*".repeat(word.length - 1) : word)
        .join(" ")
}

const text = "javascript este minunat si este grozav"
const dict = ["este"]

console.log(censorText(text, dict))
