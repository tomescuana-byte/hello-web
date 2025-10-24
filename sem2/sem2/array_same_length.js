function intercalare(v1, v2) {
    let rezultat = []

    // dacă nu au aceeași lungime, returnăm array gol
    if (v1.length !== v2.length) {
        return []
    }

    for (let i = 0; i < v1.length; i++) {
        rezultat.push(v1[i])
        rezultat.push(v2[i])
    }

    return rezultat
}

console.log(intercalare(["a", "b", "c"], [1, 2, 3]))
