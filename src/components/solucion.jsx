import React  , { useState, useEffect} from 'react';

const Solucion = () => {

       
    const datoInicial= {

        fecha: new Date(),
         edad: 0,
         nombre:'Martin',
         apellidos: 'san jose'

    }

    const [solucion, setSolucion] =useState(datoInicial); 

    useEffect(() => {
        console.log("componente creado")

        const intervalID = setInterval(() => {

            setSolucion(solucion.edad +1 );
            //document.title='${new Date()}';
            //console.log("actualizado el componente")

        }, 1000);

        return () => {
            <div>
            <h1>{datoInicial.edad} </h1>
            <h1>{datoInicial.fecha.toLocaleDateString()}</h1>
        </div>
        };
    },[]);

    
    
    
}

export default Solucion;
