import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum.js';
import { Task } from '..//..//models/task.class.js';
import Taskcomponent from '../pure/task';
//port nodeExternals from 'webpack-node-externals';


const TaskListComponent = () => {

    

    const defaulTask= new  Task('example', 'Default description', false, LEVELS.NORMAL);
    
    const [tasks, setTasks] = useState([defaulTask]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        
        console.log("Task state have been modifiqued")
        return () => {

            console.log("Task list componente is going to unmount")
          
        };
    }, []);





    const changeCompleted = (id) => {
        console.log("TODO: cambiar el estado de la tarea")

    }
    
    return (
        <div>
            Your Task
            <Taskcomponent task={defaulTask} />
        </div>  
    );
};





export default TaskListComponent;
