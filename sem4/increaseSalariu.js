function increaseSalary(salaries, percent) {
    if (!Array.isArray(salaries)) {
        throw new Error("Primul parametru trebuie să fie un array.")
    }
    if (typeof percent !== "number") {
        throw new Error("Al doilea parametru trebuie să fie un număr.")
    }

    return salaries.map(salary => salary + (salary * percent / 100))
}

try {
    const listaSalarii = [3000, 4500, 5000]
    const marite = increaseSalary(listaSalarii, 10)
    console.log("Salarii mărite:", marite)

    // test cu input invalid
    increaseSalary("nu array", 10)
} catch (err) {
    console.error("Eroare:", err.message)
}
