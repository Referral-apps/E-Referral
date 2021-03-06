import Link from "next/link";
import { useEffect } from "react";
import Super from "../components/Super";
import Online from "../components/Online";
const administraion = () => {

    
    return (
    <section className="padding-top-100 container">
        <Online />
        <Super />
     <div className="row">
     <div className="col sm-12 md-6 lg-6 padding-20">
         <Link href='/admin/facility'>
             <a>
             <div className="container back-shadow padding section hover-up pointer dashboard-card">
     <div className="row">
         <div className="col sm-12 md-12 lg-4 padding">
            <div className="dash-icon content-middle pointer">
            <span className="material-icons text-light icon size-2">
               gite
             </span> 
            </div>
         </div>
         <div className="col sm-12 md-12 lg-8 padding-20">
             <div className="h2 text-center header">FACILITY</div>
             <div className="hr"></div>
             <div className="text-center">
                Add a new health facility, edit and delete facility.
             </div>
         </div>
     </div>
    </div>
             </a>
    </Link>
</div>
     <div className="col sm-12 md-6 lg-6 padding-20">
         <Link href='/admin/officer'>
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
         <div className="col sm-12 md-12 lg-8 padding-20">
             <div className="h2 text-center header">OFFICER</div>
             <div className="hr"></div>
             <div className="text-center">
                Add an officer, update and delete an officer.
             </div>
         </div>
     </div>
    </div>
             </a>
    </Link>
</div>

     </div>
    </section> );
}
 
export default administraion;