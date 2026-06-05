

import "./LoginComponent.css";
import { useState } from "react";

const LoginComponent = () =>{

    const [userName, setUserName] = useState("");
    const [password, setPassword]= useState("");
    return <div className="form-wrapper">
        <h2>Login Form</h2>
        <form>
            <input type="text"  id="name" value="username"/> 
            <input type="password" id="password"  value="password" /> 
        </form>

    </div>
}
 export default LoginComponent;

