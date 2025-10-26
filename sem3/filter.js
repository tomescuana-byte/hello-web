const year= [
    "1998",
    "2004",
    "2003",
    "2019",
    "2010",
    "1958",
    "1000",
    "2024"
]
const anul_curent = new Date().getFullYear();


const filterYears = (year,) => {
    const anul_curent = new Date().getFullYear();

    const result = year.filter((year) => {
        const varsta=anul_curent-Number(year);
        return varsta >=18;
    })
    .map((year) => {
            return anul_curent - Number(year); 
        });
    return result
}

console.log(filterYears(year));