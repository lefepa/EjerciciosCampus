import React, {useState} from 'react';
import PropTypes from 'prop-types';


const Fgreeting = (props) => {

    const [age, setage] = useState(29); // creamos un estado para una variable a través de un componente funcional y actualizarlo
    const birthday = () => {

        setage(age+1) // actualiza el valor de age


    }
    return (
        <div>
        <h1>

        Hola {props.name} desde componente funcional

        </h1>
        <h2>
            Tu edad es  : {age}
        </h2>

        <div>
          <button onClick={birthday}>
            Cumpli años
          </button>
        </div> 
      </div>
    );
};


Fgreeting.propTypes = {
    name: PropTypes.string

};


export default Fgreeting;
