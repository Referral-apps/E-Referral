const Addofficer = () => {
    return ( 
        <section className='light back padding-top-100'>
        <div className="card addfacility light round-edge">
            <div className="text-larger text-left padding">Add OFFICER</div>
            <div className="hr"></div>
            <div className="padding">
                <div className='text-left'>NAME OF OFFICER</div>
                <input type="text" placeholder="NAME OF OFFICER" className='input white padding borderless width-100-p'/>
            </div>
            <div className="padding">
                <div className='text-left'>FACILITY</div>
                <select name="" id="" className='input borderless white width-100-p padding'>
                <option value="">FACILITY ONE</option>
                    <option value="">FACILITY TWO</option>
                    <option value="">FACILITY THREE</option>
                    <option value="">FACILITY FIVE</option>
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
                <div className='text-left'>UPLOAD SIGNATURE</div>
                <input type="file" className='padding input width-100-p white' name="" id="" />
            </div>
            <div className="padding">
                <div className='text-left'>CONTACTS</div>
                <input type="text" placeholder="CONTACTS" className='input white padding borderless width-100-p'/>
            </div>
            <div className="text-left padding"><button className='button blue'>Submit</button></div>
        </div>
        </section>
     );
}
 
export default Addofficer;