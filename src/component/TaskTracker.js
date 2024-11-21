import React from "react";

const TaskTracker = () => {
    const Tasks = [
        { id: 1, title: "Buy groceries", description: "Milk, Eggs, Bread", status: "Pending" },
        { id: 2, title: "Finish project", description: "Complete React project", status: "Completed" },
        { id: 3, title: "Book flight", description: "Flight to New York", status: "Pending" },
    ];

    return (
        <>
        <div>
            <h2>Tasks</h2>
            <ul>
                {Tasks.map((task, index) => (
                    <li key={index}>{task.title}</li>
                ))}
            </ul>

            <h2>Task Tracker</h2>
            <table border={1} style={{borderCollapse: 'collapse', width: '50%'}}>
                <thead>
                    <tr style={{}}>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {Tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
    );
};

export default TaskTracker;
