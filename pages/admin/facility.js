import Link from "next/link";
import { useEffect } from "react";
import Super from "../../components/Super";

const Facility = () => {

    
    return (
    <section className="padding-top-100 container">
        <Super />
     <div className="row">
     <div className="col sm-12 md-6 lg-6 padding-20">
         <Link href='/add/facility'>
             <a>
             <div className="container back-shadow padding section hover-up pointer dashboard-card">
     <div className="row">
         {/* <div className="col sm-12 md-12 lg-4 padding">
            <div className="dash-icon content-middle pointer">
            <span className="material-icons text-light icon size-2">
               gite
             </span> 
            </div>
         </div> */}
         <div className=" padding-20">
             <div className="h2 text-center header">ADD HEALTH FACILITY</div>
             <div className="hr"></div>
             <div className="padding-20">
                Add a new health facility,
             </div>
         </div>
     </div>
    </div>
             </a>
    </Link>
</div>
     <div className="col sm-12 md-6 lg-6 padding-20">
         <Link href='/facilities'>
             <a>
             <div className="container back-shadow padding section hover-up pointer dashboard-card">
     <div className="row">
         {/* <div className="col sm-12 md-12 lg-4 padding">
            <div className="dash-icon content-middle pointer">
            <span className="material-icons text-light icon size-2">
               people
             </span> 
            </div>
         </div> */}
         <div className="padding-20">
             <div className="h2 text-center header">VIEW FACILITIES</div>
             <div className="hr"></div>
             <div className="padding-20">
                View facilities, edit facilities and delete facilities.
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
 
export default Facility;