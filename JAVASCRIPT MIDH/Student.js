class Student {
    constructor(id, name, marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }

    getGrade() {
        if (this.marks >= 90) {
            return "Grade A";
        } else if (this.marks >= 75) {
            return "Grade B";
        } else if (this.marks >= 60) {
            return "Grade C";
        } else {
            return "Fail";
        }
    }
}

class StudentManagementSystem {
    constructor() {
        this.students = [];
    }

    addStudent(id, name, marks) {
        let student = new Student(id, name, marks);
        this.students.push(student);
    }

    displayStudents() {
        console.log("----- STUDENT REPORT -----");

        for (let student of this.students) {
            console.log(
                `ID: ${student.id} | ${student.name} | ${student.marks} | ${student.getGrade()}`
            );
        }
    }

    findTopper() {
        let topper = this.students.reduce((top, student) => {
            return student.marks > top.marks ? student : top;
        });

        console.log(`\nTopper: ${topper.name} (${topper.marks})`);
    }

    displayPassedStudents() {
        let passed = this.students.filter(student => student.marks >= 60);

        console.log("\nPassed Students:");

        passed.forEach(student => {
            console.log(student.name);
        });
    }

    displayFailedStudents() {
        let failed = this.students.filter(student => student.marks < 60);

        console.log("\nFailed Students:");

        failed.forEach(student => {
            console.log(student.name);
        });
    }

    calculateAverage() {
        let total = this.students.reduce(
            (sum, student) => sum + student.marks,
            0
        );

        let average = total / this.students.length;

        console.log("\nAverage Marks:", average);
    }

    countPassed() {
        let passed = this.students.filter(student => student.marks >= 60);

        console.log("Total Passed:", passed.length);
    }

    countFailed() {
        let failed = this.students.filter(student => student.marks < 60);

        console.log("Total Failed:", failed.length);
    }

    searchById(id) {
        let student = this.students.find(student => student.id === id);

        if (student) {
            console.log("\nSearch by ID:");
            console.log(student);
        } else {
            console.log("Student not found");
        }
    }

    searchByName(name) {
        let student = this.students.find(
            student => student.name.toLowerCase() === name.toLowerCase()
        );

        if (student) {
            console.log("\nSearch by Name:");
            console.log(student);
        } else {
            console.log("Student not found");
        }
    }

    sortByMarks() {
        let sorted = [...this.students].sort(
            (a, b) => b.marks - a.marks
        );

        console.log("\nStudents Sorted by Marks:");

        sorted.forEach(student => {
            console.log(`${student.name} - ${student.marks}`);
        });
    }

    displayTopThree() {
        let topThree = [...this.students]
            .sort((a, b) => b.marks - a.marks)
            .slice(0, 3);

        console.log("\nTop 3 Students:");

        topThree.map((student, index) => {
            console.log(`${index + 1}. ${student.name} - ${student.marks}`);
        });
    }
}

let system = new StudentManagementSystem();

system.addStudent(101, "Ganesh", 95);
system.addStudent(102, "Sumanth", 82);
system.addStudent(103, "Kishore", 67);
system.addStudent(104, "Suresh", 45);
system.addStudent(105, "Praneeth", 91);

system.displayStudents();
system.findTopper();
system.displayPassedStudents();
system.displayFailedStudents();
system.calculateAverage();
system.countPassed();
system.countFailed();
system.searchById(103);
system.searchByName("Priya");
system.sortByMarks();
system.displayTopThree();