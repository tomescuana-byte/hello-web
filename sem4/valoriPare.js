class EvenNumberStream2 {
    #current

    constructor(startValue) {
        this.#current = (startValue % 2 === 0) ? startValue : startValue + 1
    }

    get next() {
        const result = this.#current
        this.#current = this.#current + 2
        return result
    }
}

// test
const seq = new EvenNumberStream2(3)
for (let i = 0; i < 5; i++) {
    console.log(seq.next)
}
