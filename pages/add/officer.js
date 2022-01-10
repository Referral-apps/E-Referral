const officer = () => {
    return ( 
        <section className='padding-top-100'>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="width-500-max center round-edge padding-20">
            <div className="h2 text-left padding">Add OFFICER</div>
            <div className="hr"></div>
            <div className="padding">
                <div className='text-left'>NAME OF OFFICER</div>
                <input type="text" placeholder="NAME OF OFFICER" className='input bordered padding full-width'/>
            </div>
            <div className="padding">
                <div className='text-left'>FACILITY</div>
                <select name="" id="" className='input bordered padding full-width'>
                <option value="">FACILITY ONE</option>
                    <option value="">FACILITY TWO</option>
                    <option value="">FACILITY THREE</option>
                    <option value="">FACILITY FIVE</option>
                </select>
            </div>
            <div className="padding">
                <div className='text-left'>DISTRICT</div>
                <select name="" id="" className='input bordered padding full-width'>
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
                <input type="text" placeholder="CONTACTS" className='input bordered padding full-width'/>
            </div>
            <div className="text-left section padding"><button className='button indigo card text-white'>Add Officer</button></div>
        </div>
        </section>
     );
}
 
export default officer;