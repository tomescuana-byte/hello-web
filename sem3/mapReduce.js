const myMap = (array, transformation) => {
    const result = []
    for (const element of array) {
        result.push(transformation(element))
    }
    return result
}

const myReduce = (array, reducer, initialValue) => {
    let accumulator = initialValue
    for (const element of array) {
        accumulator = reducer(accumulator, element)
    }
    return accumulator
}

const sampleArray = [1, 2, 3, 4, 5]

console.log("myMap:", myMap(sampleArray, (x) => x * 2))
console.log("myReduce:", myReduce(sampleArray, (acc, x) => acc + x, 0))
