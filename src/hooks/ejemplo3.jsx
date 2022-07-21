/**
 * ejemplos hooks 
 * useState()
 * useContext()
 */

import React, {useState, useContext} from 'react';

/**
 * 
 * @returns Componente 1
 * Va a tener un contexto que va a tener un valor que recibe desde el padre
 */


const miContexto=React.createContext(null);
const Componente1 = () => {

// inicializamos vacio que se va a l lnar con los datos del padre
    const state =useContext(miContexto)
    return (
        <div>
            <h1>
                El token es: {state.token}  {/* la idea es pasar un dato sin prop */}
            </h1>
            {/* pintamos el componente 2 */}
            <Componente2 />
             
        </div>
    );
}

const Componente2 = () => {

    // inicializamos vacio que se va a l lnar con los datos del padre
        const state = useContext(miContexto);
        return (
            <div>
                <h2>
                    la sesión es:  {state.sesion} 
                    {/* la idea es pasar un dato sin props */}
                    {/* sino a través de contextos */}
                </h2>
               
                 
            </div>
        );
    }


    
    export default function MiComponenteConContexto() {

        const estadoInicial = {

            token: '123345',
            sesion: 1
        }

        const [sessionData,  setSessionData] = useState(estadoInicial);

        function actualizarSesion() {

            setSessionData( {

                token: 'leninfer',
                sesion: sessionData.sesion+1

            });
            
        }

      return (
        
        <miContexto.Provider value={sessionData}>

           {/* todo lo que este aquí puede leer los datos de sessionData*/}
            {/* ademas si actualiza los componentes de aquí todo se actualiza*/}
            <Componente1 />
            <button onClick={actualizarSesion}>Actualizar Sesión</button>
            

        </miContexto.Provider>
          
        
      )
    }
    

