import { useState } from "react";
const Refferedstatus = () => {
    const [modaldisplay, setmodaldisplay] = useState('none')
    const [requestfeedbackdisplay, setrequestfeedbackdisplay] = useState('none')
    const Handleviewform = ()=>{
     setmodaldisplay('block')
     setrequestfeedbackdisplay('none')
    }
    const Closeviewmodal = ()=>{
    setmodaldisplay('none')
    }

    const Handlerequestfeedback = ()=>{
     setrequestfeedbackdisplay('block')
     setmodaldisplay('none')
    }
    const closerequestfeedback = ()=>{
        setrequestfeedbackdisplay('none')
    }
    return ( 
    <section className="container padding-top-100">

        <div className="h2">Patient Referral Status</div>
  <div className="horizontal-scroll">
 
<table className="table stripped full-width">
    <thead className="indigo">
        <th>S/N</th>
        <th>PATIENT NAME</th>
        <th>REFERRING FACILITY</th>
        <th>FACILITY REFFERED TO</th>
        <th>TYPE OF DIAGNOSIS</th>
        <th>STATUS</th>
        <th>ACTION</th>
        <th>FEEDBACK</th>
    </thead>
    <tr>
        <td>1</td>
        <td>Jhon deo</td>
        <td>JHAN CHPS</td>
        <td>WA REG HOSPITAL</td>
        <td>BIRTH</td>
        <td>DISCHARGED</td>
        <td>
        <span onClick={Handleviewform} className='pointer hover-text-blue'>View Form</span>
        <span> | </span>
        <span onClick={Handlerequestfeedback} className='pointer hover-text-blue'>Request Feedback</span>
        </td>
        <td>
            <select name="" id="" className='input light width-100-p'>
                <option value=""></option>
                <option value="">Yes</option>
                <option value="">No</option>
            </select>
        </td>
    </tr>
    <tr>
        <td>1</td>
        <td>Jhon deo</td>
        <td>JHAN CHPS</td>
        <td>WA REG HOSPITAL</td>
        <td>BIRTH</td>
        <td>DISCHARGED</td>
        <td>
        <span onClick={Handleviewform} className='pointer hover-text-blue'>View Form</span>
        <span> | </span>
        <span onClick={Handlerequestfeedback} className='pointer hover-text-blue'>Request Feedback</span>
        </td>
        <td>
            <select name="" id="" className='input light width-100-p'>
                <option value=""></option>
                <option value="">Yes</option>
                <option value="">No</option>
            </select>
        </td>
    </tr>
    <tr>
        <td>1</td>
        <td>Jhon deo</td>
        <td>JHAN CHPS</td>
        <td>WA REG HOSPITAL</td>
        <td>BIRTH</td>
        <td>DISCHARGED</td>
        <td>
        <span onClick={Handleviewform} className='pointer hover-text-blue'>View Form</span>
        <span> | </span>
        <span onClick={Handlerequestfeedback} className='pointer hover-text-blue'>Request Feedback</span>
        </td>
        <td>
            <select name="" id="" className='input light width-100-p'>
                <option value=""></option>
                <option value="">Yes</option>
                <option value="">No</option>
            </select>
        </td>
    </tr>

</table>

  </div>

<div className="popup back-shadow viewform white padding-20" style={{display:`${modaldisplay}`}}>
    <span className='float-right margin text-x-large pointer  text-pink hover-text-red scale-up' onClick={Closeviewmodal}>
     <span className="material-icons">
     close
     </span>
    </span>
    <div className="text-left text-larger padding">VIEW FORM</div>
    <div className="hr"></div>
    <form method='get'>
           <div className="row">
               <div className="col sm-12 md-6 lg-6 padding left-indigo">
                <div className="row border margin-bottom-10">
                    <div className="co sm-12 md-6 lg-6 padding">
                        <table>
                            <tr>
                                <td><div className="text-left">PATIENT REG NO:</div></td>
                                <td><div className="datadisplay">002992929</div></td>
                            </tr>
                        </table>
                    </div>
                    <div className="co sm-12 md-6 lg-6 padding">
                        <table className='table'>
                            <tr>
                                <td><div className="text-left">DATE AND TIME:</div></td>
                                 <td><div className='text-indigo datadisplay'>12 August, 2021</div></td>
                            </tr>
                        </table>
                   
                     
                    </div>
                </div>
                <div className="border padding">
                <div className="text-larger text-left input-title">Health Facility Information</div>
                <div className="hr"></div>
                    <div>
                      <table>
                          <tr>
                              <td><div className='text-left input-lable'>NAME OF REFFERING HEALTH FACILITY:</div></td>
                              <td className='datadisplay'>Facility One</td>
                          </tr>
                      </table>
                    </div>
                    <div>
                     <table>
                         <tr>
                             <td><div className='text-left input-lable'>NAME OF HEALTH FACILITY REFFERED TO:</div></td>
                              <td><div className='datadisplay'>Facility Name</div></td>
                         </tr>
                     </table>
                    </div>
                    <div>
                      <table>
                          <tr>
                              <td><div className='text-left input-lable'>TIME OF DEPATURE:</div></td>
                              <td><div className='datadisplay'>3:30pm</div></td>
                          </tr>
                      </table>
                    </div>

                </div>
                <div className="border padding section">
                <div className="text-larger text-left input-title">Patient | Client Information</div>
                <div className="hr"></div>
                    <div>
                        <table>
                            <tr>
                                <td><div className='text-left input-lable'>FULLNAME:</div></td>
                                <td><div className="datadisplay">Patient name</div></td>
                            </tr>
                            <tr>
                            <td><div className='text-left input-lable'>OTHERNAMES:</div></td>
                                <td><div className="datadisplay">other name</div></td>
                            </tr>

                            <tr>
                            <td><div className='text-left input-lable'>SEX:</div></td>
                                <td><div className="datadisplay">male</div></td>
                            <td><div className='text-left input-lable'>Date Of Birth:</div></td>
                            <td><div className="datadisplay">12 August, 2022</div></td>
                            </tr>

                            <tr>
                            <td><div className='text-left input-lable'>INSURANCE STATUS:</div></td>
                                <td><div className="datadisplay">insurance</div></td>
                            </tr>

                        </table>
                    </div>

        <div className="">
            <table>
            <tr>
            <td>
                <div className='text-left input-lable'>NAME OF CONTACT PERSON(RELATIVE):</div>
            </td>
                <td>
                    <div className="datadisplay">Jhon deo</div>
                </td>
            </tr>
            <tr>
            <td>
                <div className='text-left input-lable'>CONTACT OF RELATIVE:</div>
            </td>
                <td>
                    <div className="datadisplay">00393939</div>
                </td>
            </tr>
            </table>
            </div>
        </div>
        <div className="border padding section">
     <div className="text-larger text-left input-title">Patient | Client Clinical Details</div>
     <div className="hr"></div>
         <div className="padding">
         <div className='text-left input-lable'>PRESENTING COMPLAINTS:</div>
       <div className="datadisplay">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati repellat hic consequatur quia. Dignissimos doloribus facilis, est nisi asperiores repellendus sint necessitatibus nulla et dolorum illo, inventore, nihil in accusamus.
       </div>
         </div>
         <div className="padding">
         <div className='text-left input-lable'>EXAMINATION OF FINDINGS:</div>
     <div className="datadisplay">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio deleniti saepe corrupti quam quos voluptatum optio necessitatibus, quisquam facere, esse, eius ex eaque reiciendis cupiditate voluptates nesciunt quae. Magnam.
     </div>
         </div>
         <div className="row">
             <table>
                 <tr>
                     <td><div className='text-left input-lable'>TEMPERATURE:</div></td>
                     <td><div className="datadisplay">90</div></td>
                     <td><div className='text-left input-lable'>PULSE:</div></td>
                     <td><div className="datadisplay">pulse</div></td>
                 </tr>
             </table>
         </div>
         <div className="">
             <table>
                 <tr>
                     <td><div className='text-left input-lable'>RESPIRATORY RATE:</div></td>
                     <td><div className="datadisplay">23</div></td>
                     <td><div className='text-left input-lable'>WEIGHT:</div></td>
                     <td><div className="datadisplay">23 kg</div></td>

                 </tr>
             </table>
         </div>


</div>
</div>

        <div className="col sm-12 md-6 lg-6 padding">
        <div className="border padding">
          <div className="text-larger text-left input-title">Results Of Investigation Carried Out</div>
          <div className="hr"></div>
          <div className="padding">
           <div className="datadisplay">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam recusandae iusto necessitatibus perspiciatis, consequuntur sint quisquam voluptatum repellendus, fuga atque cum odit. Ipsa, rem temporibus itaque ex omnis beatae amet.
           </div>
          </div>

        </div>
        <div className="border padding section">
          <table>
              <tr>
                  <td><div className='text-left input-lable'>TYPE OF DIAGNOSIS:</div></td>
                  <td><div className="datadisplay">Diagnosis Type</div></td>
              </tr>
          </table>
         <div className="padding">
              <div className='text-left input-lable'>DIAGNOSIS:</div>
             <div className="datadisplay">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nulla, alias esse eaque dicta itaque vero odit magni, nobis est eos beatae porro necessitatibus nihil perspiciatis voluptate, modi neque impedit.
             </div>
          </div>
        </div>
        <div className="border padding section">
        <div className="text-larger text-left input-title">Management | Treament Given</div>
        <div className="hr"></div>
<div className="datadisplay">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eum odit ut amet illum voluptatum quis iste! Magni voluptatum, iure deleniti, dolores ut perspiciatis placeat inventore, dolorum fugit tenetur officia!
</div>
        </div>
        <div className="border padding section">
        <div className='text-left input-lable'>REASON FOR REFERRAL:</div>
     <div className="datadisplay">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur expedita asperiores temporibus debitis consequatur cupiditate similique repellendus veritatis veniam illum ipsa soluta quis quos, tenetur voluptatum, consequuntur iure fugit doloremque?
     </div>
  <div className="padding-top-20">
  <div className='text-left input-lable'>COMMITMENT FOR NEXT LEVEL:</div>
<div className='datadisplay'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eligendi molestiae amet porro quibusdam. Voluptates, saepe ipsam. Maiores architecto corrupti reprehenderit nulla, culpa impedit repellat fugiat placeat vero, odit vel.
</div>
  </div>
        </div>
        <div className="border padding section">
        <div className="text-larger text-left input-title">Officer Referring</div>
        <div className="hr"></div>  

        <div className="">
            <table>
                <tr>
                    <td>
                    <div className='text-left input-lable'>NAME OF OFFICER REFERRING:</div>
                    </td>
                    <td>
                        <div className='datadisplay'>Jhon Deo</div>
                    </td>
                </tr>
            </table>

            <table>
                <tr>
                    <td><div className='text-left input-lable'>POSITION:</div></td>
                    <td><div className='datadisplay'>Health user</div></td>
                </tr>
            </table>
        </div> 

       <div className="">
           <table>
               <tr>
               <td><div className='text-left input-lable'>SIGNATURE:</div></td>
              <td><div className='datadisplay'> </div></td>
              
               <td><div className='text-left input-lable'>CONTACT:</div></td>
              <td><div className='datadisplay'> 744646464 </div></td>
              
               </tr>
           </table>

       </div>


        </div>

        </div>

           </div>

 </form>
</div>

<div className="popup back-shadow light" style={{display:`${requestfeedbackdisplay}`}}>
    <span className='float-right margin text-x-large pointer text-pink hover-text-red scale-up' onClick={closerequestfeedback}>
     <span className="material-icons">
     close
     </span>
    </span>
    <div className="text-left text-larger padding">REQUEST FEEBACK</div>
    <div className="hr"></div>
    <div className="padding">    
    <div className="text-large">Are you sure you want to request a feedback</div>

    <div className="row">
        <div className="col sm-6 md-6 lg-6 padding">
            <div className='button indigo tex-large acceptbtn width-100-p'>Yes</div>
        </div>
        <div className="col sm-6 md-6 lg-6 padding">
            <div className='button pink tex-large acceptbtn width-100-p' onClick={closerequestfeedback}>No</div>
        </div>
    </div>
    </div>
</div>
    </section> );
}
 
export default Refferedstatus;