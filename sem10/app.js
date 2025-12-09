const express = require('express');
const app = express();
console.log(">>> THIS IS SEM10 APP.JS <<<");
app.use(express.json());

const sequelize = require('./sequelize'); 
const { University, Student } = require('./models');

// Sincronizare DB
sequelize.sync({ alter: true }).then(() => {
    console.log("DB synced");
});



app.post('/universities', async (req, res) => {
    try {
        const uni = await University.create(req.body);
        res.json(uni);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



app.post('/universities/:id/students', async (req, res) => {
    try {
        const student = await Student.create({
            studentFullName: req.body.studentFullName,
            studentStatus: req.body.studentStatus,
            universityId: req.params.id
        });

        res.json(student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/universities/:id/students', async (req, res) => {
    try {
        const students = await Student.findAll({
            where: { universityId: req.params.id }
        });

        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});




app.get('/universities/:universityId/students/:studentId', async (req, res) => {
    try {
        const university = await University.findByPk(req.params.universityId, {
            include: [{
                model: Student,
                where: { id: req.params.studentId }
            }]
        });

        if (!university || university.students.length === 0) {
            return res.status(404).json({ error: "University or student not found" });
        }

        res.json(university.students[0]);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.delete('/universities/:universityId/students/:studentId', async (req, res) => {
    try {
        const { universityId, studentId } = req.params;

        
        const student = await Student.findOne({
            where: {
                id: studentId,
                universityId: universityId
            }
        });

        if (!student) {
            return res.status(404).json({ error: "Student not found for this university" });
        }

        
        await student.destroy();

        res.json({ message: "Student deleted successfully" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/universities/:universityId/students/:studentId/enrollments', async (req, res) => {
    try {
        const { universityId, studentId } = req.params;

       
        const student = await Student.findOne({
            where: {
                id: studentId,
                universityId: universityId
            },
            include: Course  // many-to-many include
        });

        if (!student) {
            return res.status(404).json({ error: "Student not found in this university" });
        }

        res.json(student.courses);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/', async (req, res) => {
    try {
        const universities = await University.findAll({
            include: [
                {
                    model: Student,
                    include: [Course]  
                }
            ]
        });

        
        const courses = await Course.findAll({
            include: [Student]
        });

        
        const enrollments = await Enrollment.findAll();

      
        const exportData = universities.map(university => {
            return {
                id: university.id,
                universityName: university.universityName,

                
                students: university.students.map(s => ({
                    id: s.id,
                    studentFullName: s.studentFullName,
                    studentStatus: s.studentStatus,
                    universityId: s.universityId
                })),

                courses: courses.map(c => ({
                    id: c.id,
                    courseName: c.courseName
                })),

            
                enrollments: enrollments
                    .filter(e =>
                        university.students.map(s => s.id).includes(e.studentId)
                    )
                    .map(e => ({
                        studentId: e.studentId,
                        courseId: e.courseId
                    }))
            };
        });

        res.json(exportData);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.listen(3000, () => console.log("Server running on port 3000"));
