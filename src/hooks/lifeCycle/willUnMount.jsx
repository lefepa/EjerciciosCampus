/** ejemplo de uso del metodo Willunmount y ejemplo de uso de hooks para componente funcional 
 * cuando el componente va a desaparecer
*/

import React, { Component, useEffect } from 'react';

componentWillUnMount() {

    console.log("cuando el componente desaparezca");
}

class WillUnMount extends Component {
    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}


export const WillUnmounthook= () => {
    
    useEffect(() => {
        return () => {
            console.log("comportamiento antes de que el componente desaparezca")
        };
    }[]);
    
    return (
        <div>
         <h1>WullUnmount</h1>   
        </div>
    );
}

