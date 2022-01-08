import { useState } from "react"
import Multiselect from 'multiselect-react-dropdown';
const Addfacility = () => {
    const data = [
        {facility: 'Facility One'},
        {facility: 'Facility Two'},
        {facility: 'Facility Three'},
        {facility: 'Facility Four'},
    ]
   const [options] = useState(data)
  
    return ( 
    <section className='light back padding-top-100'>
        <form>
    <div className="card addfacility light round-edge">
        <div className="text-larger text-left padding">Add Facility</div>
        <div className="hr"></div>
        <div className="padding">
            <div className='text-left'>NAME OF FACILITY</div>
            <input type="text" placeholder="name of facility" className='input white padding borderless width-100-p'/>
        </div>
        <div className="padding">
            <div className='text-left'>REGION</div>
            <select name="" id="" className='input borderless white width-100-p padding'>
                <option value="">WA UPPER WEST REGION</option>
                <option value="">UPPER EAST REGION</option>
                <option value="">NORTHEN REGION</option>
                <option value="">SAVANNAH REGION</option>
                <option value="">AHAFO REGION</option>
            </select>
        </div>
        <div className="padding">
            <div className='text-left'>DISTRICT</div>
            <select name="" id="" className='input borderless white width-100-p padding'>
                <option value="">DISTRICT ONE</option>
                <option value="">DISTRICT TWO</option>
                <option value="">DISTRICT THREE</option>
                <option value="">DISTRICT FIVE</option>

            </select>
        </div>
        <div className="padding">
            <div className='text-left'>TYPE OF FACILITY</div>
            <select name="" id="" className='input borderless white width-100-p padding'  >
                <option value="">FACILITY ONE</option>
                <option value="">FACILITY TWO</option>
                <option value="">FACILITY THREE</option>
                <option value="">FACILITY FIVE</option>

            </select>
        </div>
        <div className="padding">
            <div className='text-left'>DIAGNOSIS APPLICABLE</div>
              <Multiselect options={options} displayValue='facility' />          
               <div className="text-left padding"><button className='button blue'>Submit</button></div>
               <div>
    
               </div>
      
        </div>
    </div>
    </form>
    </section>
     );
}
 
export default Addfacility;