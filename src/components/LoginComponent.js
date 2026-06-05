

import "./LoginComponent.css";
import { useState } from "react";

const LoginComponent = () =>{

    const [userName, setUserName] = useState("");
    const [password, setPassword]= useState("");
    return <div className="form-wrapper">
        <div className="login-form">
        <h2>Login Form</h2>
        <div className="form-fields">
        <form>
            <div  className="form-field">
            <div> Username</div>
            <div><input type="text"  id="name" /> </div>
            </div>
            <div  className="form-field">
            <div> Password</div>
            <div> <input type="password" id="password"  /> </div>

            </div>
    
           
            <button className="bg-amber-400" onClick={(e)=>e.preventDefault() }>Login</button>
        </form>
        </div>
       
        </div>
        

    </div>
}
 export default LoginComponent;

