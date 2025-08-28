

// union type for grades
type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

interface Student {
	id: number;
	name: string;
}

interface Subject {
    id: number;
    name: string;
    students: number[];
    grades: Grade[];
}

const students: Student[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];

const subjects: Subject[] = [
    { id: 1, name: 'Math', students: [1, 2], grades: ['A', 'B'] },
    { id: 2, name: 'Science', students: [2, 3], grades: ['B', 'C'] },
    { id: 3, name: 'History', students: [1, 3], grades: ['A', 'D'] },
];


const addStudent = (student: Student) => {
    students.push(student);
};

const addSubject= (
    subject: Pick<Subject, "name">,
    students: number[] = [],
    grades: Grade[] = []
) => {
    const subjectData: Subject = {
        id: subjects.length + 1,
        name: subject.name || `Subject ${subjects.length + 1}`,
        students,
        grades,
    };
    subjects.push(subjectData);
};

const getGradeDistribution = (subjects: Subject[]) => {
    const gradeNumbers = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        F: 0,
    };

    for (const subject of subjects) {
        for (const grade of subject.grades) {
            gradeNumbers[grade]++;
        }   
    }

    const entries = Object.entries(gradeNumbers);
    entries; //? Array(6) [ [ "A", 2 ], [ "B", 2 ], [ "C", 1 ], [ "D", 1 ], [ "F", 0 ] ]

return (
    `Grade Distribution:`+
    Object.entries(gradeNumbers)
        .map(([grade, count]) => `${grade}: ${count}`)
        .join("")
)
};


addStudent({ id: 4, name: 'David' });
addSubject({ name: 'English' }, [1, 2, 3, 4, 5, 6]);

console.log(getGradeDistribution(subjects)); //? 'Grade Distribution: A: 2, B: 2, C: 1, D: 1, F: 0'