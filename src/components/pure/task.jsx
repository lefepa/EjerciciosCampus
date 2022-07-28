import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Task} from '../../models/task.class.js'
import '../../styles/tasks.scss'
import { LEVELS } from '../../models/levels.enum.js';


const Taskcomponent = ({task, complete, remove}) => {

    useEffect(() => {
        console.log("tarea creada")
        return () => {

            console.log("task is going to unmount")
            
        };
    }, [task]);

    /**
     * funcion que retorna un task dependiendo del nivel de la tarea
     */

    function taskLevelBadge() {

        switch (task.level) {
            case LEVELS.NORMAL:
                return (<h6 className='mb-0'>
                    <span className='bage bg-primary'>
                     {task.level}
                        
                    </span>


                </h6>) 
            case LEVELS.URGENT:
                return (<h6 className='mb-0'>
                    <span className='bage bg-warning'>
                    {task.level}
                        
                    </span>


                </h6>)           

            case LEVELS.BLOCKING:
                return (<h6 className='mb-0'>
                    <span className='bage bg-danger'>
                    {task.level}
                        
                    </span>


                </h6>) 
                
               
        
            default:
                break;
        }

        
    }

    function taskIconCompleted () {

        if(task.completed)         {
                return  (<i onClick={()=> complete(task)} className="bi-toggle-on" style={{color:'green'}}></i>) 
            
              }  else {
                  
                 return   (<i onClick={()=> complete(task)} className="bi-toggle-off"  style={{color:'grey'}}></i>) 
                  }
        
    }

    const taskCompleted = {
        color: 'green',
        textDecoration: 'line-through'
    }
    
    const taskPending =  {
    
        fontWeight: 'bold',
        color: 'tomato'
    }


    return (
        

            <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
                <th>
                    <span className='ms-2'>{task.name}</span>
                </th>

                <td>
                    <span className='align-middle'>{task.description}</span>
                </td>
                {/* sustituir por un badge */}
                <td className='align-middle'>
                    {taskLevelBadge()}
                </td>

                {/* sustituir por un iconos */}
                <td className='align-middle'>
                     
                    {taskIconCompleted() }                 

                    {/* <span> {task.completed ? 'Completed' : 'Pending'} </span>   */}
                    <i className="bi-trash" style={{color:'tomato'}} onClick={()=> remove(task)}></i>   
                
                
                </td>


            </tr>

        
            
            
            // <div>
            //     <h2 className="task-name">
            //         Nombre: { task.name}
            //     </h2>
            //     <h3>
            //         Descripcion: { task.description}
            //     </h3>
            //     <h4>
            //         Level { task.level}
            //     </h4>
            //     <h5>
            //         This task is {task.completed ? 'COMPLETED': 'PENDING'}

            //     </h5>
            //</div>
        
    );
};


Taskcomponent.propTypes = {
 task: PropTypes.instanceOf(Task)
};


export default Taskcomponent;
