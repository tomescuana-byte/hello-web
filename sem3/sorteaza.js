function sortObjects(arr, key) {
    return arr.sort((a, b) => {
        if (a[key] < b[key]) return -1
        if (a[key] > b[key]) return 1
        return 0
    })
}

const people = [
    { name: "Ana", age: 22 },
    { name: "Mihai", age: 19 },
    { name: "Ioana", age: 25 }
]

console.log(sortObjects(people, "age"))
