import { useRef, useState, useEffect } from "react";
import Axios from "axios"
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Multiselect from 'multiselect-react-dropdown';
import Online from "../components/Online";
const ReferPatient = () => {
    const patient = useRef("");
    const Endpoint = "https://e-referral-api.herokuapp.com"
    const [token, settoken] = useState("");
    const [alertsuccess, setalertsuccess] = useState("none")
    const [success, setsuccess] = useState("")
    const [error, seterror] = useState("none")
const [message, setmessage] = useState("")
const [loader, setloader] = useState(false)
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
      
       })
        }, [])
    
        
    const Submit = (e)=>{
    const current = patient.current;
    setloader(true)
    e.preventDefault()
    const number = current["patient_no"].value
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

    const data = {
        created:date_time,
        facility_referred_to:referred_to,
        facility_referred_from:referring_facility,
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
        investigation_carried:investigation_carried,
        diagnosis:diagnosis,
        treatment_given:treatment_given,
        reason_for_referral:reason_for_referral,
        commitment_for_next_level:commitment_for_next_level,
        officer:[]

    }
 
    console.log(data)
    Axios
    .post(Endpoint + "/patient/register", `${data}`,
      {
         headers: {
            authorization: `Bearer ${token}`,
          
         }
      }
     ).then(()=>{
         setloader(false)
         setsuccess("Patient referred.")
         setalertsuccess("block")
         seterror("none")
        //  window.location.assign("/facilities")
     }).catch(err=>{
         setloader(false)
         console.log(err.message)
     })


    }
    return ( 
        <section className="container padding-top-100">
            <Online />
            <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={loader}
    >
    <CircularProgress color="inherit" />
    </Backdrop> 
            <div className="text-x-large title">
                REFER PATIENT
            </div>
        <form ref={patient}>
           <div className="row">
               <div className="col sm-12 md-12 lg-6 padding">
                   <div className="border margin-bottom-10">
                   <div className="row">
                    <div className="col sm-12 md-12 lg-12 padding">
                        <div className="text-left">PATIENT REG NO:</div>
                        <input type="text" className='input full-width bordered padding' name="patient_no" placeholder='Patient Reg No' />
                    </div>
                    <div className="col sm-12 md-12 lg-12 padding">
                    <div className="text-left">DATE AND TIME:</div>
                        <input type="datetime-local" className='input full-width bordered padding' name="date_time" placeholder='DATE AND TIME' />
                    </div>
                </div>
                   </div>
                <div className="border padding">
                <div className="text-larger text-left input-title">Health Facility Information</div>
                <div className="hr"></div>
                    <div className="padding">
                        <div className='text-left input-lable'>NAME OF REFFERING HEALTH FACILITY:</div>
                        <input type="text" className='input full-width bordered padding' name="referring_facility" placeholder='NAME OF REFFERING HEALTH FACILITY' />
                    </div>
                    <div className="padding">
                        <div className='text-left input-lable'>NAME OF HEALTH FACILITY REFFERED TO:</div>
                        <input type="text" className='input full-width bordered padding' name="referred_to" placeholder='NAME OF HEALTH FACILITY REFFERED TO' />
                    </div>
                    <div className="padding">
                        <div className='text-left input-lable'>TIME OF DEPATURE:</div>
                        <input type="time" className='input full-width bordered padding' name="departure_time" placeholder='TIME OF DEPATURE' />
                    </div>

                </div>
                <div className="border padding section">
                <div className="text-larger text-left input-title">Patient | Client Information</div>
                <div className="hr"></div>
                <div className="row">
                    <div className="col sm-12 md-6 lg-6">
                    <div className="padding">
                        <div className='text-left input-lable'>FIRST NAME:</div>
                        <input type="text" className='input full-width bordered padding' name="first_name" placeholder='FIRST NAME' />
                    </div>
                    </div>
                    <div className="col sm-12 md-6 lg-6">
                    <div className="padding">
                        <div className='text-left input-lable'>MIDDLE NAME:</div>
                        <input type="text" className='input full-width bordered padding' name="middle_name" placeholder='MIDDLE NAME' />
                    </div>
                    </div>
                    <div className="col sm-12 md-6 lg-6">
                    <div className="padding">
                        <div className='text-left input-lable'>LAST NAME:</div>
                        <input type="text" className='input full-width bordered padding' name="last_name" placeholder='LAST NAME' />
                    </div>
                    </div>
                    <div className="col sm-12 md-6 lg-6">
                    <div className="padding">
                        <div className='text-left input-lable'>SEX:</div>
                            <select name="sex" id="" className='input full-width bordered padding'>
                            {/* <option value="sex">Sex</option> */}
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
                <input type="date" name="date_of_birth" className='input full-width bordered padding' placeholder='DATE OF BIRTH' />
            </div> 
            </div>
        </div>
        <div className="row">
            <div className="col sm-12 md-12 lg-6">
            <div className="padding">
                <div className='text-left input-lable'>NAME OF RELATIVE:</div>
                <input type="text" name="relative_name" className='input full-width bordered padding' placeholder='NAME OF RELATIVE' />
            </div>
            </div>
            <div className="col sm-12 md-12 lg-6">
            <div className="padding">
                <div className='text-left input-lable'>CONTACT OF RELATIVE:</div>
                <input type="tel" name="relative_contact" className='input full-width bordered padding' placeholder='CONTACT OF RELATIVE' />
            </div>
         </div>
            </div>
        </div>
        <div className="border padding section">
     <div className="text-larger text-left input-title">Patient | Client Clinical Details</div>
     <div className="hr"></div>
         <div className="padding">
         <div className='text-left input-lable'>PRESENTING COMPLAINTS:</div>
         <textarea name="presenting_complaints" id="" cols="30" rows="3" className='input bordered full-width padding' placeholder='PRESENTING COMPLAINTS' />
         </div>
         <div className="padding">
         <div className='text-left input-lable'>EXAMINATION OF FINDINGS:</div>
         <textarea name="exam_findings" id="" cols="30" rows="3" className='input bordered full-width padding' placeholder='EXAMINATION OF FINDINGS' />
         </div>
         <div className="row">
             <div className="col sm-12 md-6 lg-6">
             <div className="padding">
             <div className='text-left input-lable'>TEMPERATURE:</div>
             <input type="number" name="temperature" className='input full-width bordered padding' placeholder='TEMPERATURE' />
             </div>
             </div>
             <div className="col sm-12 md-6 lg-6">
             <div className="padding ">
             <div className='text-left input-lable'>PULSE</div>
             <input type="number" name="pulse" className='input full-width bordered padding' placeholder='PULSE' />
         </div>
             </div>
         </div>
         <div className="row">
             <div className="col sm-12 md-6 lg-6">
             <div className="padding">
             <div className='text-left input-lable'>RESPIRATORY RATE:</div>
             <input type="number" name="respiratory_rate" className='input full-width bordered padding' placeholder='RESPIRATORY RATE' />
             </div>
             </div>
             <div className="col sm-12 md-6 lg-6">
             <div className="padding">
             <div className='text-left input-lable'>weight:</div>
             <input type="number" name="weight" className='input full-width bordered padding' placeholder='WEIGHT' />
             </div>
             </div>
         </div>


</div>
</div>

        <div className="col sm-12 md-12 lg-6 padding">
        <div className="border padding">
          <div className="text-larger text-left input-title">Results Of Investigation Carried Out</div>
          <div className="hr"></div>
          <div className="padding">
              <textarea name="investigation_carried" id="" cols="30" rows="5" className='input bordered full-width padding' placeholder='RESULTS OF INVESTIGATION' />
          </div>

        </div>
        <div className="border padding section">
          {/* <div className='text-left input-lable'>TYPE OF DIAGNOSIS:</div>
         <select name="diagnosis" id="" className='input full-width bordered padding'>
          <option value="First diagnosis">Disgnosis One</option>
         </select> */}
         <div className="padding">
              <div className='text-left input-lable'>DIAGNOSIS:</div>
              <textarea name="diagnosis" id="" cols="30" rows="5" className='input bordered full-width padding' placeholder='DIAGNOSIS' />
          </div>
        </div>
        <div className="border padding section">
        <div className="text-larger text-left input-title">Management | Treament Given</div>
        <div className="hr"></div>
        <textarea name="" id="treatment_given" cols="30" rows="5" className='input bordered full-width padding' placeholder='MANAGEMENT | TREATMENT GIVEN' />

        </div>
        <div className="border padding section">
        <div className='text-left input-lable'>REASON FOR REFERRAL:</div>
        <textarea name="reason_for_referral" id="" cols="30" rows="5" className='input bordered full-width padding' placeholder='REASON FOR REFERRAL' />
        <div className='text-left input-lable'>COMMITMENT FOR NEXT LEVEL:</div>
        <textarea name="commitment_for_next_level" id="" cols="30" rows="5" className='input bordered full-width padding' placeholder='COMMITMENT FOR NEXT LEVEL' />
        </div>
        <div className="border padding section">
        <div className="text-larger text-left input-title">Officer Referring</div>
        <div className="hr"></div>  

        <div className="row">
            <div className="col sm-12 md-6 lg-6">
            <div className="padding">
        <div className='text-left input-lable'>NAME OF OFFICER REFERRING:</div>
        <input name="" id="" type='text' className='input full-width bordered padding' placeholder='NAME OF OFFICER REFERRING' />
        </div>
            </div>
            <div className="col sm-12 md-6 lg-6">

            <div className="padding">
       <div className='text-left input-lable'>POSITION:</div>
        <input name="" type='text' id="" className='input full-width bordered padding' placeholder='POSITION' />
        </div>
            </div>
        </div> 

       <div className="row">
           <div className="col sm-12 md-6">
           <div className="padding">
        <div className='text-left input-lable'>SIGNATURE:</div>
        <input type="file" className='input full-width bordered padding' />
        </div>   
           </div>
           <div className="col sm-12 md-6 lg-6">
           <div className="padding">
       <div className='text-left input-lable'>CONTACT:</div>
        <input name="" id="" type='tel' className='input full-width bordered padding' placeholder='POSITION' />
        </div>
           </div>
             <div className="col sm-12 md-12 lg-12 text-left padding">
             <div className="padding" style={{display:`${alertsuccess}`, width:"100%"}} onClick={()=>setalertsuccess("none")}>
       <Alert severity="success">{success}</Alert>
       </div>
       
            <div className="section text-small text-red" style={{display:`${error}`}}>
            <Alert severity="error">{message}</Alert>
            </div>
           <button className='indigo button text-white' onClick={Submit}>Submit Request</button>
           </div>
       </div>


        </div>

        </div>

           </div>

 </form>

        </section>
     );
}
 
export default ReferPatient;