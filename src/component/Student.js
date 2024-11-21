import React from "react";
const StudentsList = () => {
    const Students = [
        { id: 1, name: "John Doe", age: 16, grade: "A" },
        { id: 2, name: "Jane Smith", age: 17, grade: "B" },
        { id: 3, name: "Sam Wilson", age: 15, grade: "A+" },
    ];

    return (
        <>
        <div>
            <h2 className="text-center text-blue-700  ">Students Names</h2>
            <ul>
                {Students.map((student, index) => (
                    <li key={index}>{student.name}</li>
                ))}
            </ul>

            <h2>Student Details</h2>
            <table border={1} style={{borderCollapse: 'collapse', width: '50%'}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {Students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
    );
};

export default StudentsList;
