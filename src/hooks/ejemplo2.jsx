/* ejemplo de uso:
useState()
useRef() identificar valores o referenciarlos dentro de la vista
useEffect()


*/

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    // creamos dos contadores con estado diferentes
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // vamos a crear una referencia con useRef() para asociar una variable con 
    // un elemento del DOM del componente (vista.html)

    const miRef = useRef();

    function incrementar1 () {
        setContador1(contador1 +1);

    }

    function incrementar2() {

        setContador2(contador2+1);

    }

    //  trabajando con useEffect() 
    /**
     * ? Caso 1: ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en el estado del componente se ejecuta
     * aquello que esté dentro del useEffect
     */

    // useEffect(() => {
        
    //     console.log("cambio en el estado del componente");
    //     console.log("mostrando referencia al elemento del DOM");
    //     console.log(miRef);
    // })

    /**
     * ? caso 2: ejecutar sólo cuando cambie el contador 1
     * 
     */

        // useEffect(() => {

        //     console.log("cambio en el estado del componente");
        //     console.log("mostrando referencia al elemento del DOM");
        //     console.log(miRef);
            
        // }, [contador1]);

     /**
     * ? caso 3: ejecutar sólo cuando cambie contador 1 o contador 2
     * 
     */

      useEffect(() => {

           console.log("cambio en el estado del componente");
             console.log("mostrando referencia al elemento del DOM");
             console.log(miRef);
            
         }, [contador1, contador2]);

    return (
        <div>
        <h1> ejemplos UseSate, useRef  y useEffect</h1>
        <h2>Contador 1: {contador1}</h2>
        <h2>Contador 2: {contador2}</h2>
        { /* elemento referenciado */}
        <h4 ref={miRef}>
            
            ejemplo de elemento refernciado
        </h4>
        <div>
            <button onClick={incrementar1}>contador 1</button>
            <button onClick={incrementar2}>contador 2</button>
        </div>  
        </div>
    );
}

export default Ejemplo2;
