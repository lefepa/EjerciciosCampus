import React, {useRef} from 'react';


const Child = ({name, send, update}) => {

    const messageRef = useRef("")
    const nameRef = useRef("")

    function pressButton () {
          
         const text = messageRef.current.value;
         alert(`Text input ${text}`);


    }

    function pressButtonParams(text) {

        alert(`Text: ${text}`);
    }

    function submitName(e) {

        e.preventDefault();
        update(nameRef.current.value);


    }
    return (
        <div style={{background: 'blue', padding: '10px'}}>
            <p onMouseOver={() => console.log("onMouseOver")}>Hello {name}</p>
            <button onClick=
            { () => console.log("boton 1 pulsado")} >
            Boton 1 
            </button>
            <button onClick={pressButton}>
            Boton 2 
            </button>
            {/* Si voy a enviar un parámetro debo crear una función
             anónima que llame la función principal */}
            <button onClick={() => pressButtonParams ("estamos haciendo una prueba")} >
            Boton 3
            </button>
            <input placeholder='Insert a text' 
                   onFocus={() => console.log("FOCUS")}
                   ref={messageRef}
                   >
            </input>

            <button onClick={() => send (messageRef.current.value)} >
            Send message
            </button>
            <div style={{marginTop: '20x'}}>
             <form onSubmit={ submitName}>
                <input ref={nameRef} placeholder="new name" />
                <button type="submit" > UpdateName</button>

              

             </form>


            </div>

        </div>
    );
}

export default Child;
