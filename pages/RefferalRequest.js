import Link from 'next/link'
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
        <section className='padding-top-100'>
     <div className="container border padding-20 margin-top-50">  
     <div className="row">
         <div className="col sm-12 md-6 lg-6 padding">
            <div className="h2"> Refferal Request</div>
         </div>
         <div className="col sm-12 md-6 lg-6  padding">
            <input type="text" className='input bordered padding full-width' placeholder="Search" />
         </div>
         <div className="hr section width-100-p"></div>
     </div>    
<table className="table stripped bordered text-small">
    <thead className="indigo">
        <th>S/N</th>
        <th>Partient Name</th>
        <th>Action</th>
        <th>Preview</th>
    </thead>
    <tr>
        <td>1</td>
        <td>Partient Name</td>
        <td>
            <span onClick={openmodal1} className='button'>Accept</span>
            <span> | </span>
            <span onClick={openmodal2} className='button'>Forward</span>
        </td>
        <td>
            <button className='button' onClick={viewmodal}>Preview</button>
        </td>
    </tr>


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
            <button className='button indigo text-white full-width'>Yes</button>
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