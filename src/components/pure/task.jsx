import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Task} from '../../models/task.class.js'


const Taskcomponent = ({task}) => {

    useEffect(() => {
        console.log("tarea creada")
        return () => {

            console.log("task is going to unmount")
            
        };
    }, [task]);


    return (
        <div>
            <h2>
                Nombre: { task.name}
            </h2>
            <h3>
                Descripcion: { task.description}
            </h3>
            <h4>
                Level { task.level}
            </h4>
            <h5>
                This task is {task.completed ? 'COMPLETED': 'PENDING'}

            </h5>
        </div>
    );
};


Taskcomponent.propTypes = {
 task: PropTypes.instanceOf(Task)
};


export default Taskcomponent;
