function lista_numere(numere) {
    let rezultat = []
    for (let i = 0; i < numere.length; i++) {
        rezultat.push(numere[i])
    }
    return rezultat
}

console.log(lista_numere([1, 2, 3, 4, 5]))

