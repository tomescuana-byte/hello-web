const fibonacci = (n) => {
    if (n < 0) return -1 

    if (n === 0) return 0
    if (n === 1) return 1

    let a = 0
    let b = 1
    let c

    for (let i = 2; i <= n; i++) {
        c = a + b
        a = b
        b = c
    }

    return b
}


if (process.argv.length <= 2) {
    console.log("nu sunt suficienti parametri")
} else {
    let n = parseInt(process.argv[2])
    console.log(fibonacci(n))
}
