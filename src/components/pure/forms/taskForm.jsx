import React, {useRef} from 'react';
import { LEVELS } from '../../../models/levels.enum';
import PropTypes from 'prop-types';
import { Task } from '../../../models/task.class';

const TaskForm = ({add, length}) => {

    const nameRef= useRef('');
    const descriptionRef= useRef('');
    const levelRef= useRef(LEVELS.NORMAL);
    
    function addTask(e){

        e.preventDefault() 
         const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
         )   
         add(newTask);




    }
    
    const normalStyle =  {
        color: 'blue',
        fontWeight: 'bold'
    }
    
    const urgentStyle = {

        color: 'yellow',
        fontWeight: 'bold'

    }

    const blockingStyle = {

        color: 'tomato',
        fontWeight: 'bold'
    }
    
    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type="text" classame='form-control form-control-lg' required autofill />
                <input ref={descriptionRef} id='inputName' type="text" classame='form-control form-control-lg' />
                <select  className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMal} id='selectLevel'>
                    <option style={normalStyle} value={LEVELS.NORMAL}>
                        NORMAL
                    </option>

                    <option style={urgentStyle} value={LEVELS.URGENT}>
                        URGENT
                    </option>

                    <option style={blockingStyle} value={LEVELS.BLOCKING}>
                        BLOCKING
                    </option>


                </select>
            
            <button type='submit' className='btn btn-success btn-lg ms-1'>
            {length>0 ? 'Add New Task': 'Create your First Task'}
            
            </button>
        </div>

            
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;
