import { useState } from "react"
import Multiselect from 'multiselect-react-dropdown';
const Facility = () => {
    const data = [
        {facility: 'Facility One'},
        {facility: 'Facility Two'},
        {facility: 'Facility Three'},
        {facility: 'Facility Four'},
    ]
   const [options] = useState(data)
  
    return ( 
    <section className='padding-top-100'>
<div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>
        <form>
    <div className="facility padding-20 round-edge width-500-max center white">
        <div className="h2 text-left padding">Add Facility</div>
        <div className="hr"></div>
        <div className="padding">
            <div className='text-left'>NAME OF FACILITY</div>
            <input type="text" placeholder="name of facility" className='input padding bordered full-width'/>
        </div>
        <div className="padding">
            <div className='text-left'>REGION</div>
            <select name="" id="" className='input padding bordered full-width'>
                <option value="">WA UPPER WEST REGION</option>
                <option value="">UPPER EAST REGION</option>
                <option value="">NORTHEN REGION</option>
                <option value="">SAVANNAH REGION</option>
                <option value="">AHAFO REGION</option>
            </select>
        </div>
        <div className="padding">
            <div className='text-left'>DISTRICT</div>
            <select name="" id="" className='input padding bordered full-width'>
                <option value="">DISTRICT ONE</option>
                <option value="">DISTRICT TWO</option>
                <option value="">DISTRICT THREE</option>
                <option value="">DISTRICT FIVE</option>

            </select>
        </div>
        <div className="padding">
            <div className='text-left'>TYPE OF FACILITY</div>
            <select name="" id="" className='input padding bordered full-width'  >
                <option value="">FACILITY ONE</option>
                <option value="">FACILITY TWO</option>
                <option value="">FACILITY THREE</option>
                <option value="">FACILITY FIVE</option>

            </select>
        </div>
        <div className="padding">
            <div className='text-left'>DIAGNOSIS APPLICABLE</div>
              <Multiselect options={options} displayValue='facility' />          
               <div className="text-left section"><button className='button indigo text-white card'>Add facility</button></div>
               <div>
    
               </div>
      
        </div>
    </div>
    </form>
    </section>
     );
}
 
export default Facility;