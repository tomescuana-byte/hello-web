const express = require("express");
const sequelize = require("./sequelize");
const Employee = require("./employee");
const { Op } = require("sequelize");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Serverul merge!");
});

app.post("/employees", async (req, res) => {
    try {
        const emp = await Employee.create(req.body);
        res.json(emp);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get("/employees", async (req, res) => {
    try {
        const orderField = req.query.order || "id"; 

        const employees = await Employee.findAll({
            attributes: ["id", "name", "salary"],   
            order: [[orderField, "ASC"]]            
        });

        res.json(employees);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


app.get("/employees/filter", async (req, res) => {
    try {
        const name = req.query.name;

        if (!name) {
            return res.status(400).json({ error: "Name query parameter is required." });
        }
        
        const result = await Employee.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        });

       
        if (result.length === 0) {
            return res.status(404).json({ error: "Employee not found" });
        }

        res.json(result);
    } catch (err) {
       
        res.status(500).json({ error: err.message });
    }
});

app.get("/employees/:id", async (req, res) => {
    try {
        const emp = await Employee.findByPk(req.params.id);

        if (!emp) {
            return res.status(404).json({ error: "Employee not found" });
        }

        res.json(emp);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put("/employees/:id", async (req, res) => {
    try {
        const emp = await Employee.findByPk(req.params.id);

        if (!emp) {
            return res.status(404).json({ error: "Employee not found" });
        }

        await emp.update(req.body);
        res.json(emp);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.delete("/employees/:id", async (req, res) => {
    try {
        const emp = await Employee.findByPk(req.params.id);

        if (!emp) {
            return res.status(404).json({ error: "Employee not found" });
        }

        await emp.destroy();
        res.json({ message: "Employee deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

sequelize.sync().then(() => {
    app.listen(7000, () => console.log("Server pornit pe http://localhost:7000"));
});
