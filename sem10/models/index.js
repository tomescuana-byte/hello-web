const University = require('./university');
const Student = require('./student');
const Course = require('./course');
const Enrollment = require('./enrollment');

University.hasMany(Student, { foreignKey: 'universityId' });
Student.belongsTo(University, { foreignKey: 'universityId' });

Student.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(Student, { through: Enrollment });

module.exports = { University, Student, Course, Enrollment };
