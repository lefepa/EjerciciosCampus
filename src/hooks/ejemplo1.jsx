// Creatr un componente tipo funcion y acceder a su estado
// privado a través de un hook y ademas poderlo modificar

import React, {useState} from 'react';

const Ejemplo1 = () => {

    const valorinicial=0
    const personaInicial = {

        name: "juan",
        Email:"ingeleninfernando@gmail.com"
    }

    const [contador, setContador] = useState(valorinicial);
    const [persona, setPersona] = useState(personaInicial);
    
    // función para actualiar el estado que contiene el contador

    function incrementaContador() {
       
        setContador (contador + 1);
        
    }

    function actualizarPersona() {

        setPersona (
            {
                name: "lenin",
                Email: "probando@kdkd"

            }
        )
    }
    return (
        <div>
            <h1> ejemplo de useSTate</h1>
            <h2>contador: {contador}</h2>
            <h2>Datos personas</h2>
            <h3>Nombre: { persona.name}</h3>
            <h3>Email:{ persona.Email}</h3>
            <button onClick={incrementaContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
