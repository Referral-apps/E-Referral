import { useState, useEffect } from "react";
import Axios from "axios"
import {useCallback} from "react"
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Multiselect from 'multiselect-react-dropdown';
import Super from "../../components/Super";

const Facility = () => {
//     const data = [
//         {facility: 'Facility One'},
//         {facility: 'Facility Two'},
//         {facility: 'Facility Three'},
//         {facility: 'Facility Four'},
//     ]
//    const [options] = useState(data)
const [error, seterror] = useState("none")
const [message, setmessage] = useState("")
const [loader, setloader] = useState(false)
const [name, setname] = useState("")
const [region, setregion] = useState("")
const [district, setdistrict] = useState("district")
const [type, settype] = useState("type")
const [token, settoken] = useState("")
const [alertsuccess, setalertsuccess] = useState("none")
const [success, setsuccess] = useState("")
const [role, setrole] = useState("")

useEffect(() => {
    const p = new Promise((resolve , reject)=>{
        if(JSON.parse(sessionStorage.getItem("token")) != null){
            // resolve(data=[{ , role:JSON.parse(localStorage.getItem("data").role)}])
            const parsedtoken = JSON.parse(sessionStorage.getItem("token"));
            resolve(parsedtoken)
        }
    })
    // settoken(JSON.parse(sessionStorage.getItem("token")))
    // setrole(JSON.parse(localStorage.getItem("data").role)) 
   p.then(token=>{
       settoken(token)
    //    alert(JSON.parse(localStorage.getItem("data").role))

   })
    }, [])

    
const Addfacility =() => {
    setloader(true)
if(name === "" || district === "district"   || region === "region" || type === "type" ){
    setloader(false)
    seterror("block")
    setmessage("Please make sure to fill all the neccessary fields.")
}else{

    if(role === "Referer"){
        setloader(false)
        seterror("block")
        setmessage("You are not allowed to add a facility")  
    }{
   Axios
    .post("https://e-referral-api.herokuapp.com/facility/register/", 
        {name:name,
        region:region,
        district:district,
        type_of_facility:type,
    },
      {
         headers: {
            authorization: `Bearer ${token}`,
          
         }
      }
     ).then(()=>{
         setloader(false)
         setsuccess("Facility added.")
         setalertsuccess("block")
         seterror("none")
         window.location.assign("/facilities")
     }).catch(err=>{
         setloader(false)
         console.log(err)
     })

}
}
}

  
    return ( 
    <section className='padding-top-100'>
        <Super />
            <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={loader}
    >
    <CircularProgress color="inherit" />
    </Backdrop>   

<div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>
    
    <div className="facility padding-20 round-edge width-500-max center white">
        <div className="h2 text-left padding">Add Facility</div>
        <div className="hr"></div>
        <div className="padding">
            <div className='text-left'>NAME OF FACILITY</div>
            <input type="text" placeholder="FACILITY NAME" className='input padding bordered full-width'  onChange={(e)=>setname(e.target.value)}/>
        </div>
        <div className="padding">
            <div className='text-left'>REGION</div>
            <select name="" id="" className='input bordered padding full-width' onChange={(e)=>setregion(e.target.value)}>
                    <option value="region">--Select District--</option>
                        <option value="Upper West Region">WA UPPER WEST REGION</option>
                    <option value="Upper East Region">UPPER EAST REGION</option>
                    <option value="Northen Region">NORTHEN REGION</option>
    
                </select>
        </div>
        <div className="padding">
            <div className='text-left'>DISTRICT</div>
            <select name="" id="" className='input bordered padding full-width' onChange={(e)=>setdistrict(e.target.value)}>
                    <option value="district">--Select District--</option>
                    <option value="Wa Municipal">Wa Municipal</option>
                    <option value="Jirapa">Jirapa</option>
                    <option value="Labussie Karni">Lambussie Karni</option>
                    <option value="Sissla East">Sissala East</option>
                    <option value="Sissla West">Sissala West</option>
                    <option value="Wa East">Wa East</option>
                    <option value="Wa West">Wa West</option>
    
                </select>
        </div>
        <div className="padding">
            <div className='text-left'>TYPE OF FACILITY</div>
            <select name="" id="" className='input padding bordered full-width'  onChange={(e)=>settype(e.target.value)} >
                <option value="type">--Facility Type--</option>
                <option value="Regional Office">Regional Office</option>
                <option value="District Office">District Office</option>
                <option value="Hospital">Hospital</option>
                <option value="Health Center">Health Center</option>
                <option value="CHPS">CHPS</option>
                <option value="Ply Clinic">Poly Clinic</option>

            </select>
        </div>
        {/* <div className="padding">
            <div className='text-left'>DIAGNOSIS APPLICABLE</div>
              <Multiselect options={options} displayValue='facility' />          
               <div className="text-left section"><button className='button indigo text-white card'>Add facility</button></div>
               <div>
    
               </div>
      
        </div> */}
        <div className="padding" style={{display:`${alertsuccess}`, width:"100%"}} onClick={()=>setalertsuccess("none")}>
       <Alert severity="success">{success}</Alert>
       </div>
       
            <div className="section text-small text-red" style={{display:`${error}`}}>
            <Alert severity="error">{message}</Alert>
            </div>
          <div className="text-left section padding"><button className='button indigo card text-white' onClick={Addfacility}>Add Officer</button></div>
    </div>
 
    </section>
     );
}
 
export default Facility;