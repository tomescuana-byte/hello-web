function sumDivisibleBy(arr, divisor) {
    const onlyDivisible = arr.filter((num) => num % divisor === 0);
    const sum = onlyDivisible.reduce((acc, current) => acc + current, 0);
    return sum;
}

const numbers = [10, 3, 8, 20, 7, 12, 15];
const x = 2;

const result2 = sumDivisibleBy(numbers, x);
console.log("ex2 result:", result2);
