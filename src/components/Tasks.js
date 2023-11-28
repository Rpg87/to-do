
import React from "react";
import '../stylesheets/Tasks.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tasks = ({ id, text, complete, onComplete, taskDelete }) => {
    return (
        <div className={complete ? 'container-task complete' : 'container-task '}  >
            <div
                className="task-text"
                onClick={() => onComplete(id)}>
                {text}
            </div>
            <div
                className="container-task-icons"
                onClick={() => taskDelete(id)}>
                <AiOutlineCloseCircle className="task-icon" />
            </div>
        </div >
    )
};

export default Tasks;