import React, { useState } from "react";
import '../stylesheets/Form.css';
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }


    const handleSend = e => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: input,
            complete: false,


        }

        props.onSubmit(newTask);
    }



    return (
        <form className="form-task"
            onSubmit={handleSend}>
            <input
                type="text"
                className="input-task"
                placeholder="Añade una tarea."
                name="text"
                onChange={handleChange} />
            <button className="button-task">
                Agregar tarea
            </button>

        </form>
    )
};

export default Form;