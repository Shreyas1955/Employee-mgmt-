import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./FbConfig"
export default function Login()
{

  useEffect(()=>{
    let un=localStorage.getItem("un")
    if(un!=null)
    {
        nav("/Dashboard");
    }   

   },[])

    const nav=useNavigate()
    const [ademail,setAdemail]=useState("")
    const [password,setPassword]=useState("")
    const hAdemail=(event)=>{setAdemail(event.target.value)}
    const hPassword=(event)=>{setPassword(event.target.value)}

   const send=(event)=>{
    event.preventDefault()
    const auth = getAuth();
        signInWithEmailAndPassword(auth, ademail, password)
        .then(res=>{
        localStorage.setItem("un",ademail);
        nav("/Dashboard")
        })
        .catch(err=>alert("issue: "+err))

   }
        
       
      

    return(
        <>
        <center>
            <div className="login-container">
                <h1>Welcome!</h1>
                <h4>Please enter your admin account details</h4>
                <div className="login-content">
                    <form onSubmit={send}>
                        <label>Email</label><br/>
                        <input type="text" className="login-email" onChange={hAdemail} value={ademail} required /><br/><br/>
                        <label>Password</label><br/>
                        <input type="password" className="login-email" onChange={hPassword} value={password} required /><br/>
                        <input type="submit" value="Login" className="login-btn"/>
                    </form>

                </div>

            </div>
        </center>
        
        </>
    );
}