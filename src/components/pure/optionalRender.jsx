import React,{useState}from 'react';

let red = 120;
let green = 10;
let blue = 150;


const loggedStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    color:'white'
}

const unloggedStyle =  {

 backgroundColor: 'tomato',
 color:'white',
 fontWeight: 'bold'
}
// Login / Logout buttons 

const LoginButton = ({loginAction,propStyle}) =>
{
    return (

       <button style={propStyle} onClick={loginAction}>LOGIN</button>

    )
}


const LogoutButton = ({logoutAction, propStyle}) =>
{
    return (

       <button style={propStyle} onClick={logoutAction}>LOGOUT</button>

    )
}



const OptionalRender = () => {
    
    const [access, setAcces]=useState(true);
    const [nMessage, setnMessage] = useState(0);

    // const updateAccess = () => {
    //     setAcces(access);
    // }
    
    const loginAction = () => {

        setAcces(false)
    }

    const logoutAction = () => {

        setAcces(true)
    }

    
    let optionalButton;

    if(access) {

        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction} />
    } else
    {
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction} />
    }

    let addMessages = () =>{

        setnMessage(nMessage + 1)

    }
     
    
    return (
        <div>
            {optionalButton}
            {/** N mesagges unRead */}
            {/* {nMessage===1 && <p> You have {nMessage} new message</p> }
            {nMessage > 1 && <p> You have {nMessage} new messages</p>}
            {nMessage === 0 && <p>There are no new messages</p>} */}

            {/* Ternary operator */}

            {access ? 
                
             null: (
                <div>
                {nMessage > 0 ? 
                <p> You have {nMessage} new messege{nMessage > 1 ? 's' : null} </p> :
                <p> There are no new message</p>
                }
                <button onClick={addMessages}> {nMessage===0 ? 'Add your first Mesagge' : 'add New Message'} </button>

                </div>
             )
            
            
            }
            
            
        </div>
    );
}

export default OptionalRender;
