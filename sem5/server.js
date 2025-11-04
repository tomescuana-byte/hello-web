import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/resource/:id", (req, res) => {
  const { id } = req.params;          
  res.json({
    mesaj: `Ai cerut resursa cu id-ul ${id}`,
    id
  });
});


app.get("/", (req, res) => {
  res.send("Serverul e șmecher și merge!");
});

app.listen(port, () => {
  console.log(`Server pornit la http://localhost:${port}`);
});


const resources = {
  1: { nume: "Ana", varsta: 20 },
  2: { nume: "Ion", varsta: 22 },
  3: { nume: "Maria", varsta: 25 }
};

app.get("/resource/:id", (req, res) => {
  const { id } = req.params;
  const resource = resources[id];

  if (!resource) {
    return res.status(404).json({ eroare: "Resursa nu există" });
  }
  res.json(resource);
});


