/** Componente que va a contener un formulario para autenticación 
 * de usuarios
 */

import React from 'react';

const LoginForms = () => {

    const initialCredentials= [
        {

            user:"",
            pasword:""

        }

    ];

    
    const [credentials, setCredentials] = useState(initialCredentials);
    return (
        <div>
            
        </div>
    );
}

export default LoginForms;
