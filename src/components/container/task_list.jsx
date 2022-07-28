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
    const [loading, setloading] = useState(true);

    useEffect(() => {
        
        console.log("Task state have been modifiqued")
        setTimeout(() => {
            setloading(false);
        }, 2000
        );
       
        return () => {

            console.log("Task list componente is going to unmount")
          
        };
    }, [tasks])


    function completeTask (task){

        console.log("complete this task", task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed= !tempTask[index].completed;
        // we update the state of the comopnent and it will
        // update the interaction of the tasks in order to
        //show the task update

        setTasks(tempTask);

    }

    function deleteTask(task) {

        console.log("complete this task", task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);


    }

    function addTask(task) {

        console.log('delete this task', task);
       const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);

    }

    const Table = () => {
        return (
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
                                        task={task}
                                        complete={completeTask}
                                        remove={deleteTask}   
                                        />

                                    )
                                })    
                            }
                                
                            </tbody>
                            {/* TODO: iterar sobre una lista de tareas */}
                        </table>
        )

    }

    let tasksTable ;

    if(tasks.length>0) {

        tasksTable= <Table />
    }  else {

                tasksTable = (
                <div>
                    <h3> there are no tasks to show</h3>)
                    <h4>Please, create one</h4>
                </div>
                )
             }
         
            const loadingStyle = {

                color: 'grey',
                fontWeight: 'bold'

            } 
    
    return (
        <div style={{backgroundColor: 'white'}}>
            <div className='col-12'>
                <div classame='card'>
                    
                    <div className='card-header p-3'>
                        <h5>Your Task:</h5>

                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
                      {loading? (<p style={loadingStyle}>LOADING.....</p>): tasksTable}   
                        
                    </div>
                    
                </div>
            </div>
             <TaskForm add={addTask} length={tasks.length} /> 
       
            
        </div>  
    );
};





export default TaskListComponent;
