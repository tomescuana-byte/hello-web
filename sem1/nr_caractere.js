let numara_caractere = (pisi1, pisi2) => {
    if (pisi1.length !== pisi2.length) {
        return -1
    }

    let count = 0
    for (let i = 0; i < pisi1.length; i++) {
        if (pisi1[i] !== pisi2[i]) {
            count++
        }
    }

    return count
}

console.log(numara_caractere("ana", "car"))
console.log(numara_caractere("test", "test"))
console.log(numara_caractere("abc", "abcd"))