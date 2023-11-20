import React, { useState } from "react";
import Form from "./Form";
import '../stylesheets/TasksList.css';
import Tasks from "./Tasks";

const TasksList = () => {

    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        if (task.text.trim()) {
            task.text = task.text.trim();
            const updatedTasks = [task, ...tasks];
            setTasks(updatedTasks);
        }
    }
    return (
        <>
            <Form onSubmit={addTask} />
            <div className="task-list-container">
                {
                    tasks.map((task) =>
                        <Tasks
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            complete={task.complete} />


                    )
                }
            </div>
        </>
    )
};

export default TasksList;