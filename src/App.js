import React from 'react';
import './App.css';
import TaskListComponent from './components/container/task_list';
import GreetingStyles from './components/pure/forms/GreetingStyles';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';


function App() {
  return (
    <div>
    
    { /*<TaskListComponent/>*/ }

    {/* <Ejemplo1 /> */}

    {/* <Ejemplo2 /> */}
    

    {/* <MiComponenteConContexto /> */}

    {/* <Ejemplo4 nombre="Lenin Fernando">

      <h3>
        contenido del props.children
      </h3>

    </Ejemplo4> */}

    <GreetingStyles name="Fernando" />
    </div>
  );
}


export default App;
