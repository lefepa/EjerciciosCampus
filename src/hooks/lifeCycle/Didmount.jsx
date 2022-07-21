/** Ejemplo de uso del ciclo de vida del componente clase y el hook
 * * del ciclo de vida en componente funcional
 */

import React, { Component, useEffect} from 'react';

export class Didmount extends Component {

    componentDidMount() {

        console.log("comportamiento antes de que el componente sea añadido al dom (renderice)")

    }
    render() {
        return (
            <div>
                <h1>didMount</h1>
                
            </div>
        );
    }
}



export const DidmountHook = () => {

    useEffect(() => {

        console.log("comportamiento antes de que el componente sea añadido al dom (renderice)")


    }, [])

    return (

        <div>
            <h1>didMount</h1>

        </div>
    );
}



