import { useState } from "react";
const ViewRefferals = () => {
const [modaldisplay, setmodaldisplay] = useState('none')
const [requestfeedbackdisplay, setrequestfeedbackdisplay] = useState('none')
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

const patientdata = [
    {
        sn:"Wa Health Facility",
        date:"23/09/2022",
        opd:"OPD XXs",
        sex:"Male",
        age:"23",
        address:"Zongo Z/298",
        nhis:"Yes",
        time:"2:00pm",
        name:"Jhon Deo",
        referral:"Wa Facility",
        referraltype:"To",
        provisionaldiagnosis:"Severe malaria",
        finaldiagnosis:"Breach",
        outcome:"Discharged",
        feedback:"Yes",
    },
    {
        sn:"Wa Health Facility",
        date:"23/09/2022",
        opd:"OPD XXs",
        sex:"Male",
        age:"23",
        address:"Zongo Z/298",
        nhis:"Yes",
        time:"2:00pm",
        name:"Iddris Abdul Wahab",
        referral:"Wa Facility",
        referraltype:"To",
        provisionaldiagnosis:"Severe malaria",
        finaldiagnosis:"Breach",
        outcome:"Discharged",
        feedback:"No",
    },
    {
        sn:"Nandom",
        date:"23/09/2022",
        opd:"OPD XXs",
        sex:"Male",
        age:"23",
        address:"Zongo Z/298",
        nhis:"Yes",
        time:"2:00pm",
        name:"Rashad karim",
        referral:"Wa Facility",
        referraltype:"To",
        provisionaldiagnosis:"Severe malaria",
        finaldiagnosis:"Breach",
        outcome:"Discharged",
        feedback:"No",
    }
]
    return ( 
        <section className="padding-top-100">
    <section className="padding-20">
    <div className="h2">View Patient Referrals</div>

<div className="section">
    <input type="text" className="input bordered padding" placeholder="search patient" onChange={(e)=>setsearch(e.target.value)}/>
</div>
  <div className="horizontal-scroll">

<table className="table stripped text-small">
    <thead className="indigo">
        <th>S/N</th>
        <th>DATE</th>
        <th>NAME</th>
        <th>OPD/FLD</th>
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
        <th>FEEDBACK</th>
    </thead>
    {
        patientdata.filter(data=>{
         if(search === ""){
             return patientdata;
         }else if(
         data.name.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
         data.referraltype.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
         data.feedback.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
         data.provisionaldiagnosis.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
         data.finaldiagnosis.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
         data.outcome.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
         data.sex.trim().toLowerCase().includes(search.trim().toLowerCase())
         ){
             return data;
         }else if(data.name.trim().toLowerCase().includes(!search.trim().toLowerCase()))
         {
             return "No data found"
         }
        }).map(patient =>(
            <tr key={patient.name}>
                <td>{patient.sn}</td>
                <td>{patient.date}</td>
                <td>{patient.name}</td>
                <td>{patient.opd}</td>
                <td>{patient.sex}</td>
                <td>{patient.age}</td>
                <td>{patient.address}</td>
                <td>{patient.nhis}</td>
                <td>{patient.referral}</td>
                <td>{patient.referraltype}</td>
                <td>{patient.provisionaldiagnosis}</td>
                <td>{patient.finaldiagnosis}</td>
                <td>{patient.outcome}</td>
                <td>
                <span onClick={Handleviewform} className='pointer hover-text-blue'>View Form</span>
                <span> | </span>
                <span onClick={Handlefeedback} className='pointer hover-text-blue'>Add Feedback</span>
                </td>
                <td>{patient.feedback}</td>
            </tr>
        ))
    }
</table>

  </div>

<div className="popup back-shadow light padding-20" style={{display:`${modaldisplay}`}}>
    <span className='float-right margin text-x-large pointer  text-pink hover-text-red scale-up' onClick={Closeviewmodal}>
     <span className="material-icons">
     close
     </span>
    </span>
    <div className="text-left text-larger padding">VIEW FORM</div>
    <div className="hr"></div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam accusantium dicta maxime, odio quibusdam velit quam delectus laborum aspernatur perspiciatis, suscipit culpa blanditiis quasi minus impedit aliquam, sapiente voluptatum ullam!
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate aperiam dolore rerum quibusdam aliquam ducimus esse, laudantium itaque, sunt, velit qui commodi soluta modi rem excepturi consequatur ab eligendi?
</div>
<div className="popup back-shadow white round-edge" style={{display:`${requestfeedbackdisplay}`}}>
    <div className="padding-20 hr">
    <span className='float-right margin text-x-large pointer text-pink hover-text-red scale-up' onClick={closerequestfeedback}>
     <span className="material-icons">
     close
     </span>
    </span>
    <div className="text-left text-larger padding">ADD FEEBACK</div>
 
    </div>
    <div className="padding-20">    
    <div>
        <select name="" id="" className='input full-width padding bordered'>
        <option value="">Discharged</option>
        <option value="">Absconding</option>
        <option value="">Expired</option>
        </select>
    </div>
    <div className="hr"></div>
    <div className="">
                <div className='text-left input-lable'>DETAILS:</div>
                <textarea rows='5' type="tel" className='input bordered padding full-width' placeholder='DETAILS' />
            </div>

            <div className="section">
                <div className="row">
                    <div className="col sm-6 md-6 lg-6 padding">
                      <button className='button indigo text-white full-width' type='submit'>Add Feedback</button>
                    </div>
                    <div className="col sm-6 md-6 lg-6 padding">
                    <button className='button pink text-white full-width' onClick={closerequestfeedback}>Cancel Request</button> 
                    </div>
                </div>
            </div>
    </div>
</div>
    </section> 
        </section>
     );
}
 
export default ViewRefferals;