import {Link,useNavigate} from "react-router-dom"
export default function Navbar(){
    const nav=useNavigate()
    const signout=(event)=>{
        localStorage.clear()
        window.location.reload()
        nav("/Login")
    }
    const dash=(event)=>{
        nav("/Dashboard")
    }
    const add=(event)=>{
        nav("/Add")
    }
    return(
        <>
        <div className="nav-horizontal" >
            <p>ADMIN</p>
        </div>
        <ul>
  <li><button onClick={dash} className="nav-btn">Dashboard</button></li>
  <li><button onClick={add} className="nav-btn">Add Employee</button></li>
  
  <li><button onClick={signout}className="nav-btn" >Signout</button></li>
    </ul>

        </>


    );

}