/** ejemplo de uso de método  componenteUpdate y uso de hook
 * del componente funcional
 */

import React, { Component , useEffect} from 'react'

componentDidUpdate() {

    console.log("comportamiento cuando recibe nuevos rops o cambios en su estado privado");

}

export  class didUpDate extends Component {
  render() {
    return (
      <div>
        <h1>didUpDate</h1>
      </div>
    )
  }
}


export const DidUpDatehook= () => {
    
    useEffect(() => {
        console.log("comportamiento cuando recibe nuevos rops o cambios en su estado privado");
    });
    
    return (
        <div>
         <h1>didUpDate</h1>   
        </div>
    );
}



