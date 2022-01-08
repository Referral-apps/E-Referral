const ReferPatient = () => {
    return ( 
        <section className="container padding-top-50">

            <div className="text-x-large title">
                REFER PATIENT
            </div>
        <form method='post'>
           <div className="row">
               <div className="col sm-12 md-12 lg-6 padding">
                <div className="row border margin-bottom-10">
                    <div className="col sm-12 md-6 lg-6 padding">
                        <div className="text-left">PATIENT REG NO:</div>
                        <input type="text" className='input full-width bordered padding' placeholder='Patient Reg No' />
                    </div>
                    <div className="col sm-12 md-6 lg-6 padding">
                    <div className="text-left">DATE AND TIME:</div>
                        <input type="datetime-local" className='input full-width bordered padding' placeholder='DATE AND TIME' />
                    </div>
                </div>
                <div className="border padding">
                <div className="text-larger text-left input-title">Health Facility Information</div>
                <div className="hr"></div>
                    <div className="padding">
                        <div className='text-left input-lable'>NAME OF REFFERING HEALTH FACILITY:</div>
                        <input type="text" className='input full-width bordered padding' placeholder='NAME OF REFFERING HEALTH FACILITY' />
                    </div>
                    <div className="padding">
                        <div className='text-left input-lable'>NAME OF HEALTH FACILITY REFFERED TO:</div>
                        <input type="text" className='input full-width bordered padding' placeholder='NAME OF HEALTH FACILITY REFFERED TO' />
                    </div>
                    <div className="padding">
                        <div className='text-left input-lable'>TIME OF DEPATURE:</div>
                        <input type="time" className='input full-width bordered padding' placeholder='TIME OF DEPATURE' />
                    </div>

                </div>
                <div className="border padding section">
                <div className="text-larger text-left input-title">Patient | Client Information</div>
                <div className="hr"></div>
                <div className="row">
                    <div className="col sm-12 md-6 lg-6">
                    <div className="padding">
                        <div className='text-left input-lable'>FULLNAME:</div>
                        <input type="text" className='input full-width bordered padding' placeholder='SURNAME' />
                    </div>
                    </div>
                    <div className="col sm-12 md-6 lg-6">
                    <div className="padding">
                        <div className='text-left input-lable'>OTHER NAMES:</div>
                        <input type="text" className='input full-width bordered padding' placeholder='OTHERNAMES' />
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col sm-12 md-6 lg-6">
                    <div className="padding">
                        <div className='text-left input-lable'>SEX:</div>
                            <select name="" id="" className='input full-width bordered padding'>
                            <option value="sex">Sex</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            </select>
                    </div>
                    </div>
                    <div className="col sm-12 md-6 lg-6">
                    <div className="padding">
                        <div className='text-left input-lable'>DATE OF BIRTH:</div>
                        <input type="date" className='input full-width bordered padding' placeholder='DATE OF BIRTH' />
                    </div>
                    </div>
                </div>
        <div className="row">
            <div className="col sm-12 md-6 lg-6">
            <div className="padding">
                <div className='text-left input-lable'>INSURANCE STATUS:</div>
                <select name="" id="" className='input full-width bordered padding'>
                <option value="NON INSURANCE">NON-INSURANCE</option>
                <option value="NON INSURANCE">INSURANCE</option>
                </select>
            </div>
            </div>
            <div className="col sm-12 md-6 lg-6">
            <div className="padding">
                <div className='text-left input-lable'>DATE OF BIRTH:</div>
                <input type="date" className='input full-width bordered padding' placeholder='DATE OF BIRTH' />
            </div> 
            </div>
        </div>
        <div className="row">
            <div className="col sm-12 md-12 lg-6">
            <div className="padding">
                <div className='text-left input-lable'>NAME OF CONTACT PERSON(RELATIVE):</div>
                <input type="tel" className='input full-width bordered padding' placeholder='NAME OF CONTACT' />
            </div>
            </div>
            <div className="col sm-12 md-12 lg-6">
            <div className="padding">
                <div className='text-left input-lable'>CONTACT OF RELATIVE:</div>
                <input type="tel" className='input full-width bordered padding' placeholder='CONTACT OF RELATIVE' />
            </div>
         </div>
            </div>
        </div>
        <div className="border padding section">
     <div className="text-larger text-left input-title">Patient | Client Clinical Details</div>
     <div className="hr"></div>
         <div className="padding">
         <div className='text-left input-lable'>PRESENTING COMPLAINTS:</div>
         <textarea name="" id="" cols="30" rows="3" className='input bordered full-width padding' placeholder='PRESENTING COMPLAINTS' />
         </div>
         <div className="padding">
         <div className='text-left input-lable'>EXAMINATION OF FINDINGS:</div>
         <textarea name="" id="" cols="30" rows="3" className='input bordered full-width padding' placeholder='EXAMINATION OF FINDINGS' />
         </div>
         <div className="row">
             <div className="col sm-12 md-6 lg-6">
             <div className="padding">
             <div className='text-left input-lable'>TEMPERATURE:</div>
             <input type="number" className='input full-width bordered padding' placeholder='TEMPERATURE' />
             </div>
             </div>
             <div className="col sm-12 md-6 lg-6">

             <div className="padding">
             <div className='text-left input-lable'>PULSE</div>
             <input type="number" className='input full-width bordered padding' placeholder='PULSE' />
         </div>
             </div>
         </div>
         <div className="row">
             <div className="col sm-12 md-6 lg-6">
             <div className="padding">
             <div className='text-left input-lable'>RESPIRATORY RATE:</div>
             <input type="number" className='input full-width bordered padding' placeholder='RESPIRATORY RATE' />
             </div>
             </div>
             <div className="col sm-12 md-6 lg-6">
             <div className="padding">
             <div className='text-left input-lable'>weight:</div>
             <input type="number" className='input full-width bordered padding' placeholder='WEIGHT' />
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
              <textarea name="" id="" cols="30" rows="5" className='input bordered full-width padding' placeholder='RESULTS OF INVESTIGATION' />
          </div>

        </div>
        <div className="border padding section">
          <div className='text-left input-lable'>TYPE OF DIAGNOSIS:</div>
         <select name="" id="" className='input full-width bordered padding'>
          <option value=""></option>
         </select>
         <div className="padding">
              <div className='text-left input-lable'>DIAGNOSIS:</div>
              <textarea name="" id="" cols="30" rows="5" className='input bordered full-width padding' placeholder='DIAGNOSIS' />
          </div>
        </div>
        <div className="border padding section">
        <div className="text-larger text-left input-title">Management | Treament Given</div>
        <div className="hr"></div>
        <textarea name="" id="" cols="30" rows="5" className='input bordered full-width padding' placeholder='MANAGEMENT | TREATMENT GIVEN' />

        </div>
        <div className="border padding section">
        <div className='text-left input-lable'>REASON FOR REFERRAL:</div>
        <textarea name="" id="" cols="30" rows="5" className='input bordered full-width padding' placeholder='REASON FOR REFERRAL' />
        <div className='text-left input-lable'>COMMITMENT FOR NEXT LEVEL:</div>
        <textarea name="" id="" cols="30" rows="5" className='input bordered full-width padding' placeholder='COMMITMENT FOR NEXT LEVEL' />
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
           <button className='indigo button text-white'>Submit Request</button>
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