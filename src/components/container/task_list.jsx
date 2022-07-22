import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum.js';
import { Task } from '..//..//models/task.class.js';
import TaskForm from '../pure/forms/taskForm.jsx';
import Taskcomponent from '../pure/task';

//port nodeExternals from 'webpack-node-externals';


const TaskListComponent = () => {

    

    const defaulTask1= new  Task('example1', ' description 1', true, LEVELS.NORMAL);
    const defaulTask2= new  Task('example2', ' description 2', false, LEVELS.URGENT);
    const defaulTask3= new  Task('example3', ' description 3', false, LEVELS.BLOCKING);
    
    const [tasks, setTasks] = useState([defaulTask1, defaulTask2, defaulTask3]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        
        console.log("Task state have been modifiqued")
        setloading(false)
        return () => {

            console.log("Task list componente is going to unmount")
          
        };
    }, []);





    const changeCompleted = (id) => {
        console.log("TODO: cambiar el estado de la tarea")

    }
    
    return (
        <div>
            <div className='col-12'>
                <div classame='card'>
                    
                    <div className='card-header p-3'>
                        <h5>Your Task:</h5>

                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
                        
                        <table>
                            <thead>
                                    <tr>
                                        <th scopr='col'> Title </th>     
                                        <th scopr='col'> Description </th>  
                                        <th scopr='col'> Priority </th>
                                        <th scopr='col'> Actions </th>                            
                                    </tr>
                                
                            </thead>

                            <tbody>

                            {
                                tasks.map((task, index) => {

                                    return (

                                        <Taskcomponent 
                                        key={index}
                                        task={task}/>

                                    )
                                })    
                            }
                                
                            </tbody>
                            {/* TODO: iterar sobre una lista de tareas */}
                        </table>
                    </div>
                    <TaskForm />
                </div>
            </div>
       
            
        </div>  
    );
};





export default TaskListComponent;
