import { checkPropTypes } from 'prop-types';
import React, {useState} from 'react';

// definiendo estilos en constantes:
// ? estilo para usuario logueado
const loggedStyle = {

    color: 'blue'
}

//? estilo para usuario no loggeado

const UnloggedStyle = {

    color: 'tomato',
    fontWeight: 'bold'
}


const GreetingStyles = (props) => {

    // generamos un estado para el componente y definir si el usuario esta loggeado
    // o no

    const [logged, setLogged] = useState(false);

    const greetinUser=() => (<p> hola {props.name}</p>);
    const pleaseLogin=() => (<p>Por favor logeate</p>);

    return (
        <div style={logged ?  loggedStyle : UnloggedStyle}>
        {
        logged ? 
        greetinUser(): 
        pleaseLogin() 
        }
       

        <button onClick={() =>  {console.log("boton pulsado"); setLogged(!logged); }} >{logged ? 'Logout' : 'login '}</button>
            
        </div>
    );
}

export default GreetingStyles;
