import { useState, useEffect } from "react";
import Axios from "axios"
import {useCallback} from "react"
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Super from "../../components/Super";

const apiuri = "http://e-referral-api.herokuapp.com/staff/register";
const Endpoint = "https://e-referral-api.herokuapp.com"


const Officer = () => {
const [loader, setloader] = useState(false)
const [email, setemail] = useState("")
const [firstname, setfirstname] = useState("")
const [lastname, setlastname] = useState("")
const [region, setregion] = useState("region")
const [role, setrole] = useState("role")
const [middlename, setmiddlename] = useState("")
const [facility, setfacility] = useState("facility")
const [district, setdistrict] = useState("district")
const [contact, setcontact] = useState("")
const [error, seterror] = useState("0px")
const [message, setmessage] = useState("")
const [token, settoken] = useState("")
const [Allfacilities, setAllfacilities] = useState([]);
useEffect(() => {
    if(JSON.parse(sessionStorage.getItem("token")) != null){
        // resolve(data=[{ , role:JSON.parse(localStorage.getItem("data").role)}])
        const parsedtoken = JSON.parse(sessionStorage.getItem("token"));
        settoken(parsedtoken)
    }
}, [])
useEffect(async() => {
    const parsedtoken = JSON.parse(sessionStorage.getItem("token"));
    settoken(parsedtoken)
    await Axios.get( Endpoint + "/facility/allfacilities",
    {
        headers: {
           authorization: `Bearer ${token}`,
         
        }
     }   
    ).then((data)=>setAllfacilities(data.data.facilities))
    .catch(error=>console.log(error))

        // if(JSON.parse(sessionStorage.getItem("token")) != null){
        //     const parsedtoken = JSON.parse(sessionStorage.getItem("token"));
        //     alert(JSON.parse(localStorage.getItem("data").role))   
        // }
    })

const Addofficer =() => {
    setloader(true)
if(firstname === "" || lastname === "" || facility === "facility" || district === "district"  || contact === "" || email === "" || role === "role" || region === "region" ){
    setloader(false)
    seterror("100%")
    setmessage("Please make sure to fill all the neccessary fields.")
}else{

   Axios
    .post(Endpoint + "/staff/register", 
        {email:email , 
        firstName:firstname,
        lastName:lastname,
        middleName:middlename,
        facility:facility,
        district:district,
        region:region,
        role:role,
        contact:contact
    },
      {
         headers: {
            authorization: `Bearer ${token}`,
          
         }
      }
     ).then(()=>{
         setloader(false)
         window.location.assign("/officers")
     }).catch(err=>{
         setloader(false)
         console.log(err)
     })

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
<div className="banners-container">
    <div className="banners" style={{height:`${error}`}}>
    <div className="banner error">
      <div className="banner-icon">
      <i className="far fa-times-circle"></i>
      </div>
      <div className="banner-message">
          {message}
      </div>
      <div className="banner-close" onClick={()=>seterror("0px")}>
          &times;
      </div>
    </div>
   </div>
</div>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="width-500-max center round-edge padding-20 white">
            <div className="h2 text-left padding">Add OFFICER</div>
            <div className="hr"></div>
            <div className="padding">
                <div className='text-left'>EMAIL</div>
                <input type="email" placeholder="OFFICER'S EMAIL" className='input bordered padding full-width' onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div className="padding">
                <div className='text-left'>FIRSTNAME</div>
                <input type="text" placeholder="FIRSTNAME" className='input bordered padding full-width' onChange={(e)=>setfirstname(e.target.value)}/>
            </div>
            <div className="padding">
                <div className='text-left'>MIDDLENAME</div>
                <input type="text" placeholder="MIDDLENAME" className='input bordered padding full-width' onChange={(e)=>setmiddlename(e.target.value)}/>
            </div>
            <div className="padding">
                <div className='text-left'>LASTNAME</div>
                <input type="text" placeholder="LASTNAME" className='input bordered padding full-width' onChange={(e)=>setlastname(e.target.value)}/>
            </div>
            <div className="padding">
                <div className='text-left'>ROLE</div>
                <select name="" id="" className='input bordered padding full-width' onChange={(e)=>setrole(e.target.value)}>
                <option value="role">Select Role</option>
                <option value="Regional Officer">Regional Officer</option>
                    <option value="District Officer">District Officer</option>
                    <option value="Referer">Referer</option>
                </select>
            </div>
            <div className="padding">
                <div className='text-left'>FACILITY</div>
                <select name="" id="" className='input bordered padding full-width' onChange={(e)=>setfacility(e.target.value)}>
                <option value="facility">Select Facility</option>
                {
                    Allfacilities != [] &&
                    Allfacilities.map(facility=>(
                    <option value={facility.name} key={facility._id}>{facility.name}</option>
                    ))
                     
                }
               
   
                </select>
            </div>
            <div className="padding">
                <div className='text-left'>REGION</div>
                <select name="" id="" className='input bordered padding full-width' onChange={(e)=>setregion(e.target.value)}>
                    <option value="region">Select District</option>
                        <option value="Upper West Region">WA UPPER WEST REGION</option>
                    <option value="Upper East Region">UPPER EAST REGION</option>
                    <option value="Northen Region">NORTHEN REGION</option>
    
                </select>
            </div>
            <div className="padding">
                <div className='text-left'>DISTRICT</div>
                <select name="" id="" className='input bordered padding full-width' onChange={(e)=>setdistrict(e.target.value)}>
                    <option value="district">Select District</option>
                    <option value="Wa Municipal">Wa Municipal</option>
                    <option value="Jirapa">Jirapa</option>
                    <option value="Labussie Karni">Lambussie Karni</option>
                    <option value="Sissla East">Sissala East</option>
                    <option value="Sissla West">Sissala West</option>
                    <option value="Wa East">Wa East</option>
                    <option value="Wa West">Wa West</option>
    
                </select>
            </div>
            {/* <div className="padding">
                <div className='text-left'>UPLOAD SIGNATURE</div>
                <input type="file" className='padding input width-100-p white' name="" id="" />
            </div> */}
            <div className="padding">
                <div className='text-left'>CONTACT</div>
                <input type="text" placeholder="CONTACT" className='input bordered padding full-width'  onChange={(e)=>setcontact(e.target.value)}/>
            </div>

            <div className="text-left section padding"><button className='button indigo card text-white' onClick={Addofficer}>Add Officer</button></div>
        </div>

        </section>
     );
}
 
export default Officer;