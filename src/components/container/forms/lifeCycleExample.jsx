/** ejemplo de componente de tipo que clase que disponde de los etodos de 
 * ciclo de vida
 */

import React, { Component } from 'react';

class LifeCycleExample extends Component {

    constructor(props) {
        super(props)
        console.log("cuando se instancia el componentes");
    }

    componentWillMount() {

        console.log("Willmount: antes del montaje del componente");


    }

    componentDidMount() 
    {

        console.log("DidMount: Justo al acabar el montaje del componente, antes de renderizado");

    }

    componentWillReceiveProps(nextProps) {

        console.log("Si va a recibir nuevas props");

    }

    shouldComponentUpdate(nextProps, nexState) {

        /** Controla si el componente debe o no actualizarse     */
        // return true / false

    }

    componentWillUpdate(nextProps, nexState) {

        console.log("WillUpdate: justo antes de actualizarse");

    }

    componentDidUpdate(prevProps, prevState) {


        console.log(" DidUpdate: cuando ha sido actualizado");
        
    }

    componentWillUnmount() {

        console.log("WillUnmount: justo antes de desaparcer");
    }



       render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleExample;
