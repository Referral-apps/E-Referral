import Link from "next/link";
import { useEffect, useState } from "react";
import Chart from "./Chart"
// import {Link} from 'react-router-dom' 

const Dashboard = () => {
const [online, setonline] = useState("none")
useEffect(() => {
if(JSON.parse(localStorage.getItem("data")) != null || JSON.parse(localStorage.getItem("data")) != undefined){
    const user = JSON.parse(localStorage.getItem("data"))
    const p = new Promise ((resolve , reject)=>{
        if(user.length != 0){
        resolve(user)
        }else{
    reject()
        }
    })
    p.then(currentuser=>{
      //online
      setonline("block")
    }).catch(()=>{
        //offline 
        window.location.assign("/")
        
    })
    

}
},[])

    return ( 

<section className="padding-top-100" style={{display:`${online}`}}>
<div className="container">
<div className="row">
<div className="col sm-12 md-6 lg-4">
<Link href='/referpatient'>
<a>
<div className="container back-shadow padding section hover-up pointer dashboard-card">
     <div className="row">
         <div className="col sm-12 md-12 lg-4 padding">
            <div className="dash-icon content-middle pointer">
            <span className="material-icons text-light icon size-2">
               people
             </span> 
            </div>
         </div>
         <div className="col sm-12 md-12 lg-8">
             <div className="h3 text-center header">Refer Patient</div>
             <div className="hr"></div>
             <div className="text-left">
                 Check partient Refer
             </div>
         </div>
     </div>
    </div>
</a>
    </Link>
</div>
<div className="col sm-12 md-6 lg-4">
    <div className="container back-shadow padding section hover-up pointer dashboard-card">
     <div className="row">
         <div className="col sm-12 md-12 lg-4 padding">
            <div className="dash-icon content-middle pointer">
            <span className="material-icons text-light icon size-2">
               admin_panel_settings
             </span> 
            </div>
         </div>
         <div className="col sm-12 md-12 lg-8">
             <div className="h3 text-center header">Admin Role</div>
             <div className="hr"></div>
             <div className="text-left">
                Check Admin roles
             </div>
         </div>
     </div>
    </div>
</div>
<div className="col sm-12 md-12 lg-4">
    <div className="container back-shadow padding section hover-up pointer dashboard-card">
     <div className="row">
         <div className="col sm-12 md-4 lg-4 padding">
            <div className="dash-icon content-middle pointer">
            <span className="material-icons text-light icon size-2">
               equalizer
             </span> 
            </div>
         </div>
         <div className="col sm-12 md-4 lg-8">
             <div className="h3 text-center header">Statistics</div>
             <div className="hr"></div>
             <div className="text-left">
               Patient Statistics
             </div>
         </div>
     </div>
    </div>
</div>

</div>

</div>

<div className='container section'>

    <div className="graph">
     <div className="horizontal-scroll">
     <Chart />
     </div>
     </div>

</div>
 {/* <div class="header">
    <h1>Reliable, efficient delivery</h1>
    <h1>Powered by Technology</h1>

    <p>Our Artificial Intelligence powered tools use millions of project data points
      to ensure that your project is successful</p>
  </div>
  <div class="row1-container">
    <div class="box box-down box-cyan">
      <h2>Supervisor</h2>
      <p>Monitors activity to identify project roadblocks</p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
    </div>

    <div class="box box-red">
      <h2>Team Builder</h2>
      <p>Scans our talent network to create the optimal team for your project</p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
    </div>

    <div class="box box-down box-blue">
      <h2>Calculator</h2>
      <p>Uses data from past projects to provide better delivery estimates</p>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
    </div>
  </div>
  <div class="row2-container">
    <div class="box box-orange">
      <h2>Karma</h2>
      <p>Regularly evaluates our talent to ensure quality</p>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
    </div>
  </div> */}
</section>
     );
}
 
export default Dashboard;