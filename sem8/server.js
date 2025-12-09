import express from 'express';
const app = express();
const PORT = 3000;


const books = [
    "Arta Războiului",
    "Crimă și Pedeapsă",
    "Amintiri din Copilărie",
    "Baltagul",
    "Enigma Otiliei"
];


app.get('/', (req, res) => {
    res.send('Serverul funcționează!');
});


app.get('/books', (req, res) => {
    const sortedBooks = books.sort();
    res.json(sortedBooks);
});


app.listen(PORT, () => {
    console.log(`Server pornit pe http://localhost:${PORT}`);
});
