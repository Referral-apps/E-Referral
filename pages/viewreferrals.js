import { useState, useEffect } from "react";
import Axios from "axios"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from "@mui/material/TextField"
import Snackbar from "@mui/material/Snackbar";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useRef} from "react"
import Super from "../components/Super";
import Online from "../components/Online"

const ViewRefferals = () => {
const patientEdit = useRef(null);


const [requestfeedbackdisplay, setrequestfeedbackdisplay] = useState('none')
const facilityRef = useRef(null);
const regionRef = useRef(null);
const districtRef = useRef(null);
const typeRef = useRef(null);
const [modaldisplay, setmodaldisplay] = useState('none')
const [token , settoken] = useState(null)
const [Allpatients, setAllpatients] = useState(null);
const [anchorEl, setAnchorEl] = React.useState(null);
const [snackbar, setsnackbar] = useState(false);
const [message, setmessage] = useState("");
const [patientdata, setpatientdata] = useState([]);
const [currentfacility, setcurrentfacility] = useState("")
const [nothing, setnothing] = useState("none")
const dropdown = Boolean(anchorEl);

const endPoint = "https://e-referral-api.herokuapp.com"

const handledropopen = (event) => {
  setAnchorEl(event.currentTarget);
};
const handledropclose = () => {
  setAnchorEl(null);
};
const Handleviewform = ()=>{
 setmodaldisplay('block')
 setrequestfeedbackdisplay('none')
}
const Closeviewmodal = ()=>{
setmodaldisplay('none')
}

const Handlefeedback = ()=>{
 setrequestfeedbackdisplay('block')
 setmodaldisplay('none')
}
const closerequestfeedback = ()=>{
    setrequestfeedbackdisplay('none')
}

const [filter, setfilter] = useState("")
const [search, setsearch] = useState("")

useEffect(async() => {
    const parsedtoken = JSON.parse(sessionStorage.getItem("token"));
    settoken(parsedtoken)
    await Axios.get( endPoint + "/patient/allpatients",
    {
        headers: {
           authorization: `Bearer ${token}`,
         
        }
     }   
    ).then((data)=>{
        // setAllpatients(data.data.staff)
        setpatientdata(data.data.patients)
        const user = JSON.parse(localStorage.getItem("data"))
        setcurrentfacility(user._id)
    })
    .catch(error=>console.log(error))

        // if(JSON.parse(sessionStorage.getItem("token")) != null){
        //     const parsedtoken = JSON.parse(sessionStorage.getItem("token"));
        //     alert(JSON.parse(localStorage.getItem("data").role))   
        // }
    })


    //delete
    const [Deletemodal, setDeletemodal] = React.useState(false);
    const [DeletePatient, setDeletePatient] = useState("");;
    const HandleDelete = (Officer)=>{
        setDeletemodal(true)
        setDeletePatient(Officer)

    }

    const Delete = async()=>{
 
      await  Axios.delete(`${endPoint}/staff/delete/${DeletePatient._id}` , 
      {
        headers: {
           authorization: `Bearer ${token}`,
         
        }
     }  
        ).then(()=>{s
            setmessage( DeletePatient.email + " " + "deleted successfully")
            setDeletemodal(false)
            setsnackbar(true)

        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}
    //editpateint
    const [EditModal, setEditModal] = useState(false);
    const [EditId, setEditId] = useState("");
    const [editpatient, seteditpatient] = useState("");
    const [currentpatient, setcurrentpatient] = useState("");
    const [defaultValue, setdefaultValue] = useState(false);
    const HandleEdit = async(edit)=>{
        setEditModal(true)
        setEditId(edit._id)
        seteditpatient(edit)
        setcurrentpatient(edit)
        setdefaultValue(true)
        console.log(edit)
    }

    const UpdateFacility = async()=>{
        const current = patientEdit.current;
        const date_time = current["date_time"].value
        const referring_facility = current["referring_facility"].value
        const referred_to = current["referred_to"].value
        const departure_time = current["departure_time"].value
        const first_name = current["first_name"].value
        const last_name = current["last_name"].value
        const middle_name = current["middle_name"].value
        const sex = current["sex"].value
        const date_of_birth = current["date_of_birth"].value
        const relative_name = current["relative_name"].value
        const insurance = current["insurance_status"].value
        const relative_contact = current["relative_contact"].value
        const presenting_complaints = current["presenting_complaints"].value
        const exam_findings = current["exam_findings"].value
        const temperature = current["temperature"].value
        const pulse = current["pulse"].value
        const respiratory_rate = current["respiratory_rate"].value
        const weight = current["weight"].value
        const investigation_carried = current["investigation_carried"].value
        const diagnosis = current["diagnosis"].value
        const treatment_given = current["treatment_given"].value
        const reason_for_referral = current["reason_for_referral"].value
        const commitment_for_next_level = current["commitment_for_next_level"].value
        
        const Editdata = {
            time_of_departure:departure_time,
            firstname:first_name,
            middlename:middle_name,
            lastname:last_name,
            sex:sex,
            dob:date_of_birth,
            insurance:insurance,
            relative_name:relative_name,
            contact:relative_contact,
            presenting_complaints: presenting_complaints,
            exam_findings:exam_findings,
            temperature:temperature,
            pulse:pulse,
            respiratory_rate:respiratory_rate,
            weight:weight,
            diagnosis:diagnosis,
            treatment_given:treatment_given,
            investigation_carried:investigation_carried,
            reason_for_referral:reason_for_referral,
            commitment_for_next_level:commitment_for_next_level,
            // reason:res,
        
        
        }
        

        await Axios .patch(endPoint + "/patient/update/:" + EditId ,Editdata,
        {
            headers: {
               authorization: `Bearer ${token}`,
             
            }
         }  
        ).then(()=>{
            setmessage("updated successfully")
            setsnackbar(true)
        }).catch(err=>{
            console.log(err.message)
        })
    }


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
    )
    return ( 
        <section className="padding-top-100">
                        <Snackbar
                open={snackbar}
                autoHideDuration={6000}
                onClose={()=>setsnackbar(false)}
                message={message}
                action={action}
                />
      <Dialog
        open={Deletemodal}
        // onClose={handledropclose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Officer"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              <div className="">
                 Are you sure you want to delete {DeletePatient.email}
              </div>
            Deleting an officer will wipe out all the database related to that officer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setDeletemodal(false)}>Cancel</Button>
          <Button onClick={Delete} autoFocus variant="outlined" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
 
      <Dialog
        open={EditModal}
        // onClose={handledropclose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Edit Patient"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              {
                  defaultValue === true && 
              <section>
                  <form ref={patientEdit}>
           <div className="row">
               <div className="col sm-12 md-12 lg-12 padding">
                   <div className="border margin-bottom-10">
                   <div className="row">
                    <div className="col sm-12 md-12 lg-12 padding">
                        <div className="text-left">PATIENT REG NO:</div>
                        <TextField variant="outlined" label="" defaultValue={currentpatient.id} disabled type="text" className='input full-width bordered padding' name="patient_no" placeholder='Patient Reg No' />
                    </div>
                    <div className="col sm-12 md-12 lg-12 padding">
                    <div className="text-left">DATE AND TIME:</div>
                        <TextField variant="outlined" label="" defaultValue={currentpatient.created} type="datetime-local" className='input full-width bordered padding' name="date_time"/>
                    </div>
                </div>
                   </div>
                <div className="border padding">
                <div className="text-larger text-left input-title">Health Facility Information</div>
                <div className="hr"></div>
                    <div className="padding">
                        <div className='text-left input-lable'>NAME OF REFFERING HEALTH FACILITY:</div>
                        <TextField variant="outlined" label=""  defaultValue={currentpatient.facility_referred_from} type="text" className='input full-width bordered padding' name="referring_facility" placeholder='NAME OF REFFERING HEALTH FACILITY' />
                    </div>
                    <div className="padding">
                        <div className='text-left input-lable'>NAME OF HEALTH FACILITY REFFERED TO:</div>
                        <TextField variant="outlined" label=""  defaultValue={currentpatient.facility_referred_to} type="text" className='input full-width bordered padding' name="referred_to" placeholder='NAME OF HEALTH FACILITY REFFERED TO' />
                    </div>
                    <div className="padding">
                        <div className='text-left input-lable'>TIME OF DEPATURE:</div>
                        <TextField variant="outlined" label="" defaultValue={currentpatient.time_of_departure} type="time" className='input full-width bordered padding' name="departure_time" placeholder='TIME OF DEPATURE' />
                    </div>

                </div>
                <div className="border padding section">
                <div className="text-larger text-left input-title">Patient | Client Information</div>
                <div className="hr"></div>
                <div className="row">
                    <div className="col sm-12 md-6 lg-6">
                    <div className="padding">
                        <div className='text-left input-lable'>FIRST NAME:</div>
                        <TextField variant="outlined" label="" defaultValue={currentpatient.firstname} type="text" className='input full-width bordered padding' name="first_name" placeholder='FIRST NAME' />
                    </div>
                    </div>
                    <div className="col sm-12 md-6 lg-6">
                    <div className="padding">
                        <div className='text-left input-lable'>MIDDLE NAME:</div>
                        <TextField variant="outlined" label="" defaultValue={currentpatient.middlename} type="text" className='input full-width bordered padding' name="middle_name" placeholder='MIDDLE NAME' />
                    </div>
                    </div>
                    <div className="col sm-12 md-6 lg-6">
                    <div className="padding">
                        <div className='text-left input-lable'>LAST NAME:</div>
                        <TextField variant="outlined" label="" defaultValue={currentpatient.lastname} type="text" className='input full-width bordered padding' name="last_name" placeholder='LAST NAME' />
                    </div>
                    </div>
                    <div className="col sm-12 md-6 lg-6">
                    <div className="padding">
                        <div className='text-left input-lable'>SEX:</div>
                            <select name="sex" id="" className='input full-width bordered padding'>
                   
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            </select>
                    </div>
                    </div>
                </div>
  
        <div className="row">
            <div className="col sm-12 md-6 lg-6">
            <div className="padding">
                <div className='text-left input-lable'>INSURANCE STATUS:</div>
                <select name="insurance_status" id="" className='input full-width bordered padding'>
                <option value="NON INSURANCE">NON-INSURANCE</option>
                <option value="NON INSURANCE">INSURANCE</option>
                </select>
            </div>
            </div>
            <div className="col sm-12 md-6 lg-6">
            <div className="padding">
                <div className='text-left input-lable'>DATE OF BIRTH:</div>
                <TextField variant="outlined" label="" defaultValue={currentpatient.dob} type="date" name="date_of_birth" className='input full-width bordered padding' placeholder='DATE OF BIRTH' />
            </div> 
            </div>
        </div>
        <div className="row">
            <div className="col sm-12 md-12 lg-6">
            <div className="padding">
                <div className='text-left input-lable'>NAME OF RELATIVE:</div>
                <TextField variant="outlined" label="" defaultValue={currentpatient.relative_name} type="text" name="relative_name" className='input full-width bordered padding' placeholder='NAME OF RELATIVE' />
            </div>
            </div>
            <div className="col sm-12 md-12 lg-6">
            <div className="padding">
                <div className='text-left input-lable'>CONTACT OF RELATIVE:</div>
                <TextField variant="outlined" label="" defaultValue={currentpatient.contact} type="tel" name="relative_contact" className='input full-width bordered padding' placeholder='CONTACT OF RELATIVE' />
            </div>
         </div>
            </div>
        </div>
        <div className="border padding section">
     <div className="text-larger text-left input-title">Patient | Client Clinical Details</div>
     <div className="hr"></div>
         <div className="padding">
         <div className='text-left input-lable'>PRESENTING COMPLAINTS:</div>
         <TextField variant="outlined" fullWidth multiline defaultValue={currentpatient.presenting_complaints} name="presenting_complaints" id="" cols="30" rows="3" className='input bordered full-width padding' placeholder='PRESENTING COMPLAINTS' />
         </div>
         <div className="padding">
         <div className='text-left input-lable'>EXAMINATION OF FINDINGS:</div>
         <TextField variant="outlined" fullWidth multiline defaultValue={currentpatient.exam_findings} name="exam_findings" id="" cols="30" rows="3" className='input bordered full-width padding' placeholder='EXAMINATION OF FINDINGS' />
         </div>
         <div className="row">
             <div className="col sm-12 md-6 lg-6">
             <div className="padding">
             <div className='text-left input-lable'>TEMPERATURE:</div>
             <TextField variant="outlined" label="" defaultValue={currentpatient.temperature} type="number" name="temperature" className='input full-width bordered padding' placeholder='TEMPERATURE' />
             </div>
             </div>
             <div className="col sm-12 md-6 lg-6">
             <div className="padding ">
             <div className='text-left input-lable'>PULSE</div>
             <TextField variant="outlined" label="" defaultValue={currentpatient.pulse} type="number" name="pulse" className='input full-width bordered padding' placeholder='PULSE' />
         </div>
             </div>
         </div>
         <div className="row">
             <div className="col sm-12 md-6 lg-6">
             <div className="padding">
             <div className='text-left input-lable'>RESPIRATORY RATE:</div>
             <TextField variant="outlined" label="" defaultValue={currentpatient.respiratory_rate} type="number" name="respiratory_rate" className='input full-width bordered padding' placeholder='RESPIRATORY RATE' />
             </div>
             </div>
             <div className="col sm-12 md-6 lg-6">
             <div className="padding">
             <div className='text-left input-lable'>weight:</div>
             <TextField variant="outlined" label="" defaultValue={currentpatient.weight} type="number" name="weight" className='input full-width bordered padding' placeholder='WEIGHT' />
             </div>
             </div>
         </div>


</div>
</div>

        <div className="col sm-12 md-12 lg-12 padding">
        <div className="border padding">
          <div className="text-larger text-left input-title">Results Of Investigation Carried Out</div>
          <div className="hr"></div>
          <div className="padding">
              <TextField variant="outlined" fullWidth multiline defaultValue={currentpatient.investigation_carried} name="investigation_carried" id="" cols="30" rows="5" className='input bordered full-width padding' placeholder='RESULTS OF INVESTIGATION' />
          </div>

        </div>
        <div className="border padding section">
    
         <div className="padding">
              <div className='text-left input-lable'>DIAGNOSIS:</div>
              <TextField variant="outlined" fullWidth multiline defaultValue={currentpatient.diagnosis} name="diagnosis" id="" cols="30" rows="5" className='input bordered full-width padding' placeholder='DIAGNOSIS' />
          </div>
        </div>
        <div className="border padding section">
        <div className="text-larger text-left input-title">Management | Treament Given</div>
        <div className="hr"></div>
        <TextField variant="outlined" fullWidth multiline defaultValue={currentpatient.treatment_given} name="" id="treatment_given" cols="30" rows="5" className='input bordered full-width padding' placeholder='MANAGEMENT | TREATMENT GIVEN' />

        </div>
        <div className="border padding section">
        <div className='text-left input-lable'>REASON FOR REFERRAL:</div>
        <TextField variant="outlined" fullWidth multiline defaultValue={currentpatient.reason_for_referral} name="reason_for_referral" id="" cols="30" rows="5" className='input bordered full-width padding' placeholder='REASON FOR REFERRAL' />
        <div className='text-left input-lable'>COMMITMENT FOR NEXT LEVEL:</div>
        <TextField variant="outlined" fullWidth multiline defaultValue={currentpatient.commitment_for_next_level} name="commitment_for_next_level" id="" cols="30" rows="5" className='input bordered full-width padding' placeholder='COMMITMENT FOR NEXT LEVEL' />
        </div>
  
        </div>

           </div>

 </form>
              </section>
              }
  
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setEditModal(false)}  variant="outlined" color="error">Cancel</Button>
          <Button onClick={UpdateFacility} autoFocus variant="contained" color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
            <Online />
    <section className="padding-20">
    <div className="h2">View Patient Referrals (Out)</div>

<div className="section">
    <TextField variant="outlined" label="" defaultValue={currentpatient} type="text" placeholder="search patient" onChange={(e)=>setsearch(e.target.value)}/>
</div>
  <div className="horizontal-scroll">

<table className="table stripped text-small">
    <thead className="indigo">
        <th>ID</th>
        <th>NAME</th>
        <th>CONTACT</th>
        <th>STATUS</th>
        <th className="text-center">ACTION</th>
        {/* <th>OPD/FLD</th>
        <th>SEX</th>
        <th>AGE</th>
        <th>ADDRESS</th>
        <th>NHIS STATUS</th>
        <th>REFERRED FROM/TO</th>
        <th>REFERRAL TYPE</th>
        <th>PROVISIONAL DIAGNOSIS</th>
        <th>FINAL DIAGNOSIS</th>
        <th>OUTCOME</th>
        <th>ACTION</th>
        <th>FEEDBACK</th> */}
    </thead>
    {
               patientdata.filter(data=>{
                if(currentfacility === ""){
                    return patientdata;
                }else if(
                data.officer === currentfacility && data.firstname.trim().toLowerCase().includes(search.trim().toLowerCase())
               //  data.referraltype.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
               //  data.feedback.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
               //  data.provisionaldiagnosis.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
               //  data.finaldiagnosis.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
               //  data.outcome.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
               //  data.sex.trim().toLowerCase().includes(search.trim().toLowerCase())
                ){
                    return data;
                }
               }).map(patient =>(
            <tr key={patient._id}>
                <td>{patient._id}</td>
                <td>
                    {patient.firstname} {patient.middlename} {patient.lastname}
                </td>
                <td>
                    {patient.contact}
                </td>
                <td>
                    {
                      patient.accepted === false &&
                      <span>Pending request.</span>
                    }
                    {
                      patient.accepted === true &&
                      <span>Patient accepted.</span>
                    }
                </td>
       
                <td className="text-center">

<button className="button">
<MoreHorizIcon
id="basic-button"
aria-controls={dropdown ? 'basic-menu' : undefined}
aria-haspopup="true"
aria-expanded={dropdown ? 'true' : undefined}
onClick={handledropopen}
/>
</button>

<Menu
id="basic-menu"
anchorEl={anchorEl}
open={dropdown}
onClose={handledropclose}
MenuListProps={{
'aria-labelledby': 'basic-button',
}}
>
{/* <MenuItem onClick={}>Edit</MenuItem> */}
<MenuItem onClick={()=>HandleEdit(patient)}>Edit</MenuItem>
<MenuItem onClick={()=>HandleDelete(patient)}>Delete</MenuItem>
</Menu>
</td>
            </tr>
        ))
    }
</table>
<div className="center fit-width" style={{display:`${nothing}`}}>
    Nothing to show
</div>
  </div>

    </section> 
        </section>
     );
}
 
export default ViewRefferals;