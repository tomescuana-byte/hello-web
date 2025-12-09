import express from 'express';
import statusRouter from './statusRouter.js';
const app = express();
const PORT = 3000;
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); 
});


app.use('/api', statusRouter);


let books = [
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
    const sortedBooks = [...books].sort();
    res.json(sortedBooks);
});
app.get('/test-error', (req, res) => {
    throw new Error("Eroare de test!");
});


app.post('/books', (req, res) => {
    const { title } = req.body;
    if (!title || typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({
            error: "Titlul este obligatoriu și trebuie să fie un text valid."
        });
    }

    books.push(title.trim());

    res.status(201).json({
        message: "Cartea a fost adăugată cu succes.",
        books
    });
});

app.delete('/books/:index', (req, res) => {
    const index = Number(req.params.index);

    if (index < 0 || index >= books.length) {
        return res.status(404).json({
            error: "Index invalid!"
        });
    }

    const removed = books.splice(index, 1);

    res.json({
        message: "Cartea a fost ștearsă.",
        removed,
        books
    });
});



app.use((err, req, res, next) => {
    console.log("STACK ERROR:");
    console.log(err.stack);
    next(err); 
});


app.use((err, req, res, next) => {
    res.status(500).json({
        message: "A apărut o eroare pe server."
    });
});


app.listen(PORT, () => {
    console.log(`Server pornit pe http://localhost:${PORT}`);
});
