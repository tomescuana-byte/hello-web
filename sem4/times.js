Number.prototype.times = function (callback) {
    for (let i = 0; i < this; i++) {
        callback(i)
    }
}

const x = 3
x.times((i) => {
    console.log(`executare ${i + 1}`)
})
