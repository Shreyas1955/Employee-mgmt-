import Navbar from "./Navbar";
import {useState,useEffect} from "react"
import axios from "axios"
import { useLocation,useNavigate } from "react-router-dom";
export default function Update()
    {
    const loc=useLocation()
    const [empid,setEmpid]=useState("")
    const [name,setName]=useState("")
    const [number,setNumber]=useState("")
    const [email,setEmail]=useState("")
    const [salary,setSalary]=useState("")
    const [date,setDate]=useState("")

    const hEmpid=(event)=>{setEmpid(event.target.value)}
    const hName=(event)=>{setName(event.target.value)}
    const hNumber=(event)=>{setNumber(event.target.value)}
    const hEmail=(event)=>{setEmail(event.target.value)}
    const hSalary=(event)=>{setSalary(event.target.value)}
    const hDate=(event)=>{setDate(event.target.value)}

    const nav=useNavigate()
        useEffect(()=>{
            let un=localStorage.getItem("un")
            if(un=null){
                navigator("/Login")
            }
    
    
        },[])

    useEffect(()=>{
         setEmpid(loc.state.i);
         setName(loc.state.n);
         setNumber(loc.state.o);
         setEmail(loc.state.e);
         setSalary(loc.state.s);
         setDate(loc.state.d);

     },[])

   const save=(event)=>{
    event.preventDefault()
    let data={empid,name,number,email,salary,date}
    let urlAdd="http://localhost:9000/modify"
    axios.put(urlAdd,data)
    .then(res=>{
        if(res.data.affectedRows==1)
        {
            alert("record updated")
        }
        
    })
    .catch(err=>{
        alert("Please try after some time")
    })
   }
    return(
        <>
        <Navbar/>
       
   
        <div className="empadd">
            <form onSubmit={save}>
                <p>Update EMPLOYEE DETAILS</p>
                <label>Emp ID</label><br/>
                <input type="number" className="add-imp" onChange={hEmpid} value={empid} disabled={true}/><br/>
                <label>Name</label><br/>
                <input type="text" className="add-imp" onChange={hName} value={name}/><br/>
                <label>Contact number</label><br/>
                <input type="number"className="add-imp" onChange={hNumber} value={number} /><br/>
                <label>Email</label><br/>
                <input type="text" className="add-imp" onChange={hEmail} value={email}/><br/>
                <label>Salary</label><br/>
                <input type="number" className="add-imp" onChange={hSalary} value={salary}/><br/>
                <label>date of Joining</label><br/>
                <input type="date"  onChange={hDate} value={date}/><br/><br/>
                <input type="Submit" value="Update" />



            </form>
        </div>
        </>
    );
}