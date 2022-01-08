import {Link} from 'react-router-dom'
import { useState } from 'react'
const RefferalRequest = () => {
    const [modal1, setmodal1] = useState('none')
    const [modal2, setmodal2] = useState('none')
    const openmodal1 = ()=>{
        setmodal1('block')
        setmodal2('none')
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
    const title = 'Refferal Request'
    return ( 
        <section>
     <div className="container border padding-20 margin-top-50">  
     <div className="row">
         <div className="col sm-12 md-6 lg-6 text-x-large text-left">
             Refferal Request
         </div>
         <div className="col sm-12 md-6 lg-6 text-larger text-left">
            <input type="text" className='input borderless text-large light width-100-p' placeholder="Search..." />
         </div>
         <div className="hr section width-100-p"></div>
     </div>    
<table class="table light bordered">
    <thead class="green">
        <th>S/N</th>
        <th>Partient Name</th>
        <th>Action</th>
        <th>Preview</th>
    </thead>
    <tr>
        <td>1</td>
        <td>Partient Name</td>
        <td>
            <span onClick={openmodal1} className='text-medium hover-text-indigo pointer'>Accept</span>
            <span> | </span>
            <span onClick={openmodal2} className='text-medium hover-text-indigo pointer'>Forward</span>
        </td>
        <td>
            <button className='text-large button' onClick={viewmodal}>Preview</button>
        </td>
    </tr>


</table>
     </div>
     <div className="popup back-shadow light" style={{display:`${modal1}`}}>
    <span className='float-right margin text-x-large pointer text-pink hover-text-red scale-up' onClick={closemodal1}>
     <span class="material-icons">
     close
     </span>
    </span>
    <div className="text-left text-larger padding">REQUEST FEEBACK</div>
    <div className="hr"></div>
    <div className="padding">    
    <div className="text-large">Are you sure you want to accept the request</div>

    <div className="row">
        <div className="col sm-6 md-6 lg-6 padding">
            <div className='button indigo tex-large acceptbtn width-100-p'>Yes</div>
        </div>
        <div className="col sm-6 md-6 lg-6 padding">
            <div className='button pink tex-large acceptbtn width-100-p' onClick={closemodal1}>No</div>
        </div>
    </div>
    </div>
</div>
     <div className="popup back-shadow white" style={{display:`${modal2}`}}>
    <span className='float-right margin text-x-large pointer text-pink hover-text-red scale-up' onClick={closemodal2}>
     <span class="material-icons">
     close
     </span>
    </span>
    <div className="text-left text-larger padding">Forward Request</div>
    <div className="hr"></div>

     <div className="padding">
         <div className='text-left input-lable'>NAME OF FORWARDING FACILITY:</div>
         <input type="text" className='input borderless light refer-input' placeholder='NAME OF FORWARDING FACILITY' />
     </div>

     <div className="padding">
         <div className='text-left input-lable'>NAME OF FACILITY FORWARDED TO:</div>
         <input type="text" className='input borderless light refer-input' placeholder='NAME OF FACILITY FORWARDED TO' />
     </div>

     <div className="padding">
         <div className='text-left input-lable'>TIME OF FORWARD:</div>
         <input type="datetime-local" className='input borderless light refer-input' placeholder='NAME OF FACILITY FORWARDED TO' />
     </div>

     <div className="padding">
         <div className='text-left input-lable'>REASON:</div>
         <textarea rows='5' type="text" className='input borderless light refer-input' placeholder='REASON FOR FORWARD' />
     </div>

    <div className="row">
        <div className="col sm-6 md-6 lg-6 padding">
            <div className='button blue tex-large acceptbtn width-100-p'>Yes</div>
        </div>
        <div className="col sm-6 md-6 lg-6 padding">
            <div className='button pink tex-large acceptbtn width-100-p' onClick={closemodal2}>No</div>
        </div>
    </div>
    </div>
<div className="popup back-shadow viewform white" style={{display:`${modaldisplay}`}}>
    <span className='float-right margin text-x-large pointer  text-pink hover-text-red scale-up' onClick={Closeviewmodal}>
     <span class="material-icons">
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
                                <td><div className="text-left text-bold">PATIENT REG NO:</div></td>
                                <td><div className="datadisplay">002992929</div></td>
                            </tr>
                        </table>
                    </div>
                    <div className="co sm-12 md-6 lg-6 padding">
                        <table className='table'>
                            <tr>
                                <td><div className="text-left text-bold">DATE AND TIME:</div></td>
                                 <td><div class='text-indigo datadisplay'>12 August, 2021</div></td>
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
                              <td><div className='text-left input-lable text-bold'>NAME OF REFFERING HEALTH FACILITY:</div></td>
                              <td className='datadisplay'>Facility One</td>
                          </tr>
                      </table>
                    </div>
                    <div>
                     <table>
                         <tr>
                             <td><div className='text-left input-lable text-bold'>NAME OF HEALTH FACILITY REFFERED TO:</div></td>
                              <td><div className='datadisplay'>Facility Name</div></td>
                         </tr>
                     </table>
                    </div>
                    <div>
                      <table>
                          <tr>
                              <td><div className='text-left input-lable text-bold'>TIME OF DEPATURE:</div></td>
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
                                <td><div className='text-left input-lable text-bold'>FULLNAME:</div></td>
                                <td><div className="datadisplay">Patient name</div></td>
                            </tr>
                            <tr>
                            <td><div className='text-left input-lable text-bold'>OTHERNAMES:</div></td>
                                <td><div className="datadisplay">other name</div></td>
                            </tr>

                            <tr>
                            <td><div className='text-left input-lable text-bold'>SEX:</div></td>
                                <td><div className="datadisplay">male</div></td>
                            <td><div className='text-left input-lable text-bold'>Date Of Birth:</div></td>
                            <td><div className="datadisplay">12 August, 2022</div></td>
                            </tr>

                            <tr>
                            <td><div className='text-left input-lable text-bold'>INSURANCE STATUS:</div></td>
                                <td><div className="datadisplay">insurance</div></td>
                            </tr>

                        </table>
                    </div>

        <div className="">
            <table>
            <tr>
            <td>
                <div className='text-left input-lable text-bold'>NAME OF CONTACT PERSON(RELATIVE):</div>
            </td>
                <td>
                    <div className="datadisplay">Jhon deo</div>
                </td>
            </tr>
            <tr>
            <td>
                <div className='text-left input-lable text-bold'>CONTACT OF RELATIVE:</div>
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
         <div className='text-left input-lable text-bold'>PRESENTING COMPLAINTS:</div>
       <div className="datadisplay">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati repellat hic consequatur quia. Dignissimos doloribus facilis, est nisi asperiores repellendus sint necessitatibus nulla et dolorum illo, inventore, nihil in accusamus.
       </div>
         </div>
         <div className="padding">
         <div className='text-left input-lable text-bold'>EXAMINATION OF FINDINGS:</div>
     <div className="datadisplay">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio deleniti saepe corrupti quam quos voluptatum optio necessitatibus, quisquam facere, esse, eius ex eaque reiciendis cupiditate voluptates nesciunt quae. Magnam.
     </div>
         </div>
         <div className="row">
             <table>
                 <tr>
                     <td><div className='text-left input-lable text-bold'>TEMPERATURE:</div></td>
                     <td><div className="datadisplay">90</div></td>
                     <td><div className='text-left input-lable text-bold'>PULSE:</div></td>
                     <td><div className="datadisplay">pulse</div></td>
                 </tr>
             </table>
         </div>
         <div className="">
             <table>
                 <tr>
                     <td><div className='text-left input-lable text-bold'>RESPIRATORY RATE:</div></td>
                     <td><div className="datadisplay">23</div></td>
                     <td><div className='text-left input-lable text-bold'>WEIGHT:</div></td>
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
                  <td><div className='text-left input-lable text-bold'>TYPE OF DIAGNOSIS:</div></td>
                  <td><div className="datadisplay">Diagnosis Type</div></td>
              </tr>
          </table>
         <div className="padding">
              <div className='text-left input-lable text-bold'>DIAGNOSIS:</div>
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
        <div className='text-left input-lable text-bold'>REASON FOR REFERRAL:</div>
     <div className="datadisplay">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur expedita asperiores temporibus debitis consequatur cupiditate similique repellendus veritatis veniam illum ipsa soluta quis quos, tenetur voluptatum, consequuntur iure fugit doloremque?
     </div>
  <div className="padding-top-20">
  <div className='text-left input-lable text-bold'>COMMITMENT FOR NEXT LEVEL:</div>
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
                    <div className='text-left input-lable text-bold'>NAME OF OFFICER REFERRING:</div>
                    </td>
                    <td>
                        <div className='datadisplay'>Jhon Deo</div>
                    </td>
                </tr>
            </table>

            <table>
                <tr>
                    <td><div className='text-left input-lable text-bold'>POSITION:</div></td>
                    <td><div className='datadisplay'>Health user</div></td>
                </tr>
            </table>
        </div> 

       <div className="">
           <table>
               <tr>
               <td><div className='text-left input-lable text-bold'>SIGNATURE:</div></td>
              <td><div className='datadisplay'> </div></td>
              
               <td><div className='text-left input-lable text-bold'>CONTACT:</div></td>
              <td><div className='datadisplay'> 744646464 </div></td>
              
               </tr>
           </table>

       </div>


        </div>

        </div>

           </div>

 </form>
</div>

        </section>

     );
}
 
export default RefferalRequest;