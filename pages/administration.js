import Link from "next/link";
const administraion = () => {
    return (
    <section className="padding-top-100 container">
     <div className="row">
     <div className="col sm-12 md-6 lg-6 padding-20">
         <Link href='/add/facility'>
             <a>
             <div className="container back-shadow padding section hover-up pointer dashboard-card">
     <div className="row">
         <div className="col sm-12 md-12 lg-4 padding">
            <div className="dash-icon content-middle pointer">
            <span className="material-icons text-light icon size-2">
               add
             </span> 
            </div>
         </div>
         <div className="col sm-12 md-12 lg-8">
             <div className="h2 text-center">Add Facility</div>
             <div className="hr"></div>
             <div className="text-center">
                Add a new facility.
             </div>
         </div>
     </div>
    </div>
             </a>
    </Link>
</div>
     <div className="col sm-12 md-6 lg-6 padding-20">
         <Link href='/add/officer'>
             <a>
             <div className="container back-shadow padding section hover-up pointer dashboard-card">
     <div className="row">
         <div className="col sm-12 md-12 lg-4 padding">
            <div className="dash-icon content-middle pointer">
            <span className="material-icons text-light icon size-2">
               add
             </span> 
            </div>
         </div>
         <div className="col sm-12 md-12 lg-8">
             <div className="h2 text-center">Add User | Officer</div>
             <div className="hr"></div>
             <div className="text-center">
                Add A User Or Officer
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