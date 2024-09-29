import Navbar from "./Navbar";
import {useState,useEffect} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
export default function Add()
    {
        const nav=useNavigate()
        useEffect(()=>{
            let un=localStorage.getItem("un")
            if(un=null){
                navigator("/Login")
            }
    
    
        },[])
    
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

    const save=(event)=>{
        event.preventDefault()
        if(name.length<2){
            alert("Name should have atleast two letters")
            setName("")
        }
        if(number.length!=10){
            alert("Invalid Contact no.")
            setNumber("")
        }
        if(!email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")){
            alert("Invalid email")
            setEmail("")
        }
        
        let d={email}
        let url='http://localhost:9000/check'
        axios.post(url,d)
        .then(res=>{
            if(res.data.length>0){
                alert("email already exists")
                setEmail("")
                return;

            }
            else{
                let data={empid,name,number,email,salary,date}
                console.log(data)
                let urlAdd='http://localhost:9000/savedata'
                axios.post(urlAdd,data)
                .then(res=>{
                    if(res.data.affectedRows==1){
                    
                    alert("Record Saved Successfully!")
                    setEmpid("")
                    setDate("")
                    setEmail("")
                    setName("")
                    setNumber("")
                    setSalary("")
                    }
                    else{
                       alert(" Emp ID "+ empid + "  already exists")
                    }
                })
                .catch(err=>alert("ERROR, try after some time"))
            }
        })

       
    }

    return(
        <>
        <Navbar/>
       
   
        <div className="empadd">
            <form onSubmit={save}>
                <p>ADD EMPLOYEE DETAILS</p>
                <label>Emp ID</label><br/>
                <input type="number" className="add-imp" onChange={hEmpid} value={empid} required/><br/>
                <label>Name</label><br/>
                <input type="text" className="add-imp" onChange={hName} value={name} required/><br/>
                <label>Contact number</label><br/>
                <input type="number"className="add-imp" onChange={hNumber} value={number} required/><br/>
                <label>Email</label><br/>
                <input type="text" className="add-imp" onChange={hEmail} value={email} required /><br/>
                <label>Salary</label><br/>
                <input type="number" className="add-imp" onChange={hSalary} value={salary} required /><br/>
                <label>date of Joining</label><br/>
                <input type="date"  onChange={hDate} value={date} required/><br/><br/>
                <input type="Submit" value="save" />



            </form>
        </div>
        </>
    );
}