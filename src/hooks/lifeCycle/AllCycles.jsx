import React {useEffect} from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log("componente creado")

        const intervalID = setInterval(() => {

            document.title='${new Date()} '
            console.log("actualizado el componente")

        }, 1000);

        return () => {
            console.log("componente va a desaparecer")
            document.title="el tiempo se ha detenido"
            clearInterval(intervalID)
        };
    }, []);

    
    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
