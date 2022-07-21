import React {useState} from 'react';

const RegisterFrom = () => {

    const initialData= [
        {

            user:"",
            pasword:"",
            email:'',
            password: ''

        }

    ];

    
    const [data, setData] = useState(initialData);


    return (
        <div>
            
        </div>
    );
}

export default RegisterFrom;
