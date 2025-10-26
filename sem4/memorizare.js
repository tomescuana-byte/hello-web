function memoizedPower() {
    const cache = {}

    const power = (base, exp) => {
        const key = `${base}^${exp}`
        if (cache[key] !== undefined) {
            console.log('found', key)
            return cache[key]
        }

        console.log('calculated', key)
        if (exp === 0) {
            cache[key] = 1
        } else {
            cache[key] = base * power(base, exp - 1)
        }

        return cache[key]
    }

    return power
}

const pow = memoizedPower()

console.log(pow(2, 5)) 
console.log(pow(2, 3)) 
console.log(pow(2, 5)) 
