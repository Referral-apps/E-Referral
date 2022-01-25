import Link from "next/link";
import { useEffect } from "react";
import Super from "../../components/Super";

const Officer = () => {

    
    return (
    <section className="padding-top-100 container">
        <Super />
     <div className="row">
     <div className="col sm-12 md-6 lg-6 padding-20">
         <Link href='/add/officer'>
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
             <div className="h2 text-center header hr">CREATE AN OFFICER</div>
             <div className="padding-20">
                Create a new officer,
             </div>
         </div>
     </div>
    </div>
             </a>
    </Link>
</div>
     <div className="col sm-12 md-6 lg-6 padding-20">
         <Link href='/officers'>
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
             <div className="h2 text-center header">VIEW OFFICERS</div>
             <div className="hr"></div>
             <div className="padding-20">
                View officers, edit officers and delete officers.
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
 
export default Officer;