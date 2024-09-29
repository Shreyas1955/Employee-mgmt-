import {useState,useEffect} from "react"
import axios from "axios"
import {  useNavigate } from "react-router-dom"
import Navbar from "./Navbar"


export default function Dashboard()
{

    useEffect(()=>{
        let un=localStorage.getItem("un")
        if(un!=null){
            console.log("welcome "+ un)
        }
        else{
            nav("/Login")
        }



    },[])
    const nav=useNavigate()
    const [info,setInfo]=useState([])

    useEffect(()=>{
        let urlAdd="http://localhost:9000/getdata"
        axios.get(urlAdd)
        .then(res=>{
            setInfo(res.data)
    
        })
        .catch(err=>console.log(err))
    },[])

    const del=(name)=>{
        let urladd="http://localhost:9000/remove"
        let d={data:{name}}
        axios.delete(urladd,d)
        .then(res=>{
            alert("Record Deleted")
            window.location.reload()

    })
    .catch(err=>console.log(err))}

    const update=(empid,name,number,email,salary,date)=>{
        nav("/Update",{state:{i:empid,n:name,o:number,e:email,s:salary,d:date}})
    }

    return(
        <>
        <Navbar/>
        <center>
            <div>
                <h1>Welcome to Admin Portal </h1>
                
                
                <br/><br/>
                <table style={{"width":"70%"}}  id="table">
                    <tr>
                        <th>EMP ID</th>
                        <th>Name</th>
                        <th>Contact no.</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date of Joining</th>
                        <th>delete</th>
                        <th>Update</th>
                    </tr>
                    {
                        info.map((e)=>(
                            <tr key={e.empid}>
                                <td>{e.empid}</td>
                                <td>{e.name}</td>
                                <td>{e.number}</td>
                                <td>{e.email}</td>
                                <td>{e.salary}</td>
                                <td>{e.date}</td>
                                <td><button className="del-btn" onClick={()=>{if(window.confirm("Are you sure???"))del(e.name)}}>Delete</button></td>
                                <td><button className="update-btn" onClick={()=>{update(e.empid,e.name,e.number,e.email,e.salary,e.date)}}>Update</button></td>
                                
                            </tr>
                        )
                        )
                    }
                </table>
            
            </div>
        </center>
        </>
    );
}