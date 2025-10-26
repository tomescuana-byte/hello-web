function formatStringAcolade(s, values) {
    let modified = s;
    for (const key in values) {
        const placeholder = "{" + key + "}";
        if (modified.indexOf(placeholder) !== -1) {
            modified = modified.replace(placeholder, values[key]);
        }
    }
    return modified;
}

const rezultat3 = formatStringAcolade(
    "un {substantiv} este {adjectiv}",
    {
        substantiv: "cățel",
        adjectiv: "drăguț"
    }
);

console.log("ex3 result:", rezultat3);
