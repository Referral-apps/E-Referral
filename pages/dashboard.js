import Link from "next/link";
import Chart from "./Chart"
// import {Link} from 'react-router-dom' 

const Dashboard = () => {
    
    return ( 

<section>
<div className="container">
<div className="row">
<div className="col sm-12 md-6 lg-4">
<Link href='/referpatient'>
<a>
<div className="container back-shadow padding section hover-up pointer dashboard-card">
     <div className="row">
         <div className="col sm-12 md-12 lg-4 padding">
            <div className="dash-icon content-middle pointer">
            <span class="material-icons text-light icon size-2">
               people
             </span> 
            </div>
         </div>
         <div className="col sm-12 md-12 lg-8">
             <div className="h3 text-center">Refer Patient</div>
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
            <span class="material-icons text-light icon size-2">
               admin_panel_settings
             </span> 
            </div>
         </div>
         <div className="col sm-12 md-12 lg-8">
             <div className="h3 text-center">Admin Role</div>
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
            <span class="material-icons text-light icon size-2">
               equalizer
             </span> 
            </div>
         </div>
         <div className="col sm-12 md-4 lg-8">
             <div className="h3 text-center">Statistics</div>
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

</section>
     );
}
 
export default Dashboard;