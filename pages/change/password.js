import { useState, useEffect } from "react";
import Axios from "axios"
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Multiselect from 'multiselect-react-dropdown';
import { TextField } from "@mui/material";
const Password = () => {

const [error, seterror] = useState("0px")
const [message, setmessage] = useState("")
const [loader, setloader] = useState(false)
const [newpassword, setnewpassword] = useState("")
const [oldpassword, setoldpassword] = useState("");
const [token, settoken] = useState("")
const [staff, setstaff] = useState("")
const [alertsuccess, setalertsuccess] = useState("none")
const [success, setsuccess] = useState("")

useEffect(() => {
settoken(JSON.parse(sessionStorage.getItem("token")))
setstaff(JSON.parse(localStorage.getItem("data")))
}, [])
const Changepassword =() => {
    setalertsuccess("none")
    setloader(true)
    if(newpassword === ""){
        setloader(false)
        seterror("100%")
        setmessage("Enter a new password")
    }else{


   Axios
    .patch("https://e-referral-api.herokuapp.com/staff/change-password", 
        {password:newpassword
    },
      {
         headers: {
            authorization: `Bearer ${token}`,
          
         }
      }
     ).then(()=>{
         setloader(false)
         setalertsuccess("inline-block")
         setsuccess("password resetted.")
     }).catch(err=>{
         setloader(false)
         console.log(err)
     })

    }
}

  
    return ( 
    <section className='padding-top-100'>
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
    
    <div className="Password padding-top-20 padding-bottom-20 round-edge width-500-max center white">
        <div className="padding">
        <div className="h2 text-left padding header">Reset Password</div>
        <div className="hr"></div>
        <div className="padding-top-20">
        {/* <div className="padding">
            <TextField
            label="Old password"
            variant="outlined"
            fullWidth
            onChange={(e)=>setoldpassword(e.target.value)}
             />
        </div> */}
        <div className="padding">
            <TextField
            label="New password"
            variant="outlined"
            fullWidth
            onChange={(e)=>setnewpassword(e.target.value)}
             />
        </div>
       <div className="padding" style={{display:`${alertsuccess}`, width:"100%"}} onClick={()=>setalertsuccess("none")}>
       <Alert severity="success">{success}</Alert>
       </div>
          <div className="text-left section padding"><button className='button indigo card text-white' onClick={Changepassword}>Change Password</button></div>
    </div>
        </div>
    </div>
 
    </section>
     );
}
 
export default Password;