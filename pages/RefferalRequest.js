import Link from 'next/link'
import { useState, useEffect } from "react";
import Axios from "axios"
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Online from "../components/Online";
const RefferalRequest = () => {
    
const endPoint = "https://e-referral-api.herokuapp.com"
    const [modal1, setmodal1] = useState('none')
    const [modal2, setmodal2] = useState('none')
    const [token, settoken] = useState("")
    const [search, setsearch] = useState("")
    const [currentfacility, setcurrentfacility] = useState("")
    const [patientdata, setpatientdata] = useState([])
    const [focus, setfocus] = useState("")
    const [snackbar, setsnackbar] = useState(false)
    const [message, setmessage] = useState("")
    useEffect(() => {
    const user = JSON.parse(localStorage.getItem("data"))
    setcurrentfacility(user.facility)
    })
    useEffect(async() => {
    await Axios.get( endPoint + "/patient/allpatients",
    {
        headers: {
            authorization: `Bearer ${token}`,
            
        }
        }   
    ).then((data)=>{
        setpatientdata(data.data.patients)

    })
    .catch(error=>console.log(error))
    })

    
useEffect(() => {
    settoken(JSON.parse(sessionStorage.getItem("token")))
    }, [])




    const openmodal1 = (id)=>{
        setmodal1('block')
        setmodal2('none')
        setfocus(id)
       }
       const closemodal1= ()=>{
          setmodal1('none')
         
       }
       const openmodal2 = ()=>{
           setmodal2('block')
           setmodal1('none')
       }
       const closemodal2 = ()=>{
           setmodal2('none')
       }

       const [modaldisplay, setmodaldisplay] = useState('none')
       const viewmodal = ()=>{
        setmodaldisplay('block')
       }
       const Closeviewmodal = ()=>{
           setmodaldisplay('none')
       }

    //    accept
    const Accept = ()=>{
        setmessage("updating")
        setmodal1("none")
        setsnackbar(true)
 
        if(focus != ""){
        Axios.patch(endPoint + "/patient/accept/:" + focus , {accepted:true} ,
        {
            headers:{
                authorization:`Bearer ${token}`
            }
        }
        ).then(()=>{
            setmessage("patient accepted")
            setsnackbar(true)
        }).catch(err=>{
            console.log(err)
            setmessage(err.message)
            setsnackbar(true)
        })
    
    }
}
    const title = 'Refferal Request'
    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={()=>setsnackbar(false)}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
    return ( 
        <section className='padding-top-100'>
                <Snackbar
        open={snackbar}
        autoHideDuration={6000}
        message={message}
        action={action}
      />
            <Online />
     <div className="container border padding-20 margin-top-50">  
     <div className="row">
         <div className="col sm-12 md-6 lg-6 padding">
            <div className="h2"> Refferal Request</div>
         </div>
         <div className="col sm-12 md-6 lg-6  padding">
            <input type="text" className='input bordered padding full-width' onChange={(e)=>setsearch(e.target.value)} placeholder="Search" />
         </div>
         <div className="hr section width-100-p"></div>
     </div>  

<table className="table stripped bordered text-small">
    <thead className="indigo">
        <th>S/N</th>
        <th>Partient Name</th>
        <th>Action</th>
        <th>Preview</th>
        <th>Status</th>
    </thead>
    {
        patientdata.filter(data=>{
         if(
            `${data.facility_referred_to}` === currentfacility && data.firstname.trim().toLowerCase().includes(search.trim().toLowerCase())
         ){
             return data;
         }
        }).map(patient =>(
    <tr key={patient._id}>
        <td>{patient.id}</td>
        <td>{patient.firstname} {patient.middlename} {patient.lastname}</td>
        <td>
            <span onClick={()=>openmodal1(patient._id)} className='button'>Accept</span>
            <span> | </span>
            <span onClick={openmodal2} className='button'>Forward</span>
        </td>
        <td>
            <button className='button' onClick={viewmodal}>Preview</button>
        </td>
        <td>
            {
                patient.accepted == true &&
                <span>Accepted</span>
            }
            {
                patient.accepted == false &&
                <span>Pending</span>
            }
        </td>
    </tr>
        ))
    }



</table>
     </div>
     <div className="popup back-shadow white" style={{display:`${modal1}`}}>
    <div className="hr padding-20">
    <span className='float-right margin text-x-large pointer text-pink hover-text-red scale-up' onClick={closemodal1}>
     <span className="material-icons">
     close
     </span>
    </span>
    <div className="text-left text-larger padding">REQUEST FEEBACK</div>
    </div>
    <div className="padding-20">    
    <div className="padding text-center">Are you sure you want to accept the request</div>

    <div className="row">
        <div className="col sm-6 md-6 lg-6 padding">
            <button className='button indigo text-white full-width' onClick={Accept}>Yes</button>
        </div>
        <div className="col sm-6 md-6 lg-6 padding">
            <button className='button pink text-white full-width' onClick={closemodal1}>No</button>
        </div>
    </div>
    </div>
</div>
     <div className="popup back-shadow white" style={{display:`${modal2}`}}>
         <div className="padding-20 hr">
         <span className='float-right margin text-x-large pointer text-pink hover-text-red scale-up' onClick={closemodal2}>
     <span className="material-icons">
     close
     </span>
    </span>
    <div className="text-left h2 padding">Forward Request</div>
 
         </div>
         <div className="padding">
         <div className="padding">
         <div className='text-left input-lable'>NAME OF FORWARDING FACILITY:</div>
         <input type="text" className='input bordered padding full-width' placeholder='NAME OF FORWARDING FACILITY' />
     </div>

     <div className="padding">
         <div className='text-left input-lable'>NAME OF FACILITY FORWARDED TO:</div>
         <input type="text" className='input bordered padding full-width' placeholder='NAME OF FACILITY FORWARDED TO' />
     </div>

     <div className="padding">
         <div className='text-left input-lable'>TIME OF FORWARD:</div>
         <input type="datetime-local" className='input bordered padding full-width' placeholder='NAME OF FACILITY FORWARDED TO' />
     </div>

     <div className="padding">
         <div className='text-left input-lable'>REASON:</div>
         <textarea rows='5' type="text" className='input bordered padding full-width' placeholder='REASON FOR FORWARD' />
     </div>

    <div className="row">
        <div className="col sm-6 md-6 lg-6 padding">
            <button className='button indigo text-white full-width'>Forward</button>
        </div>
        <div className="col sm-6 md-6 lg-6 padding">
            <button className='button pink text-white full-width' onClick={closemodal2}>Cancel</button>
        </div>
    </div>
         </div>
    </div>

        </section>

     );
}
 
export default RefferalRequest;