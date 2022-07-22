import React, {useState} from 'react';
import Child from './forms/child';

export const Father = () => {

    const [name, setName] = useState("lenin")

    function showMessage(text) {

        alert(`Message  received: ${text}`)
    }

    function UpdateName (newName) {

        setName(newName)



    }
    return (
        <div style={{background: 'tomato', padding: '10px'}}>
            <Child name={name} send={showMessage} update={UpdateName}/>
        </div>
    );
}



