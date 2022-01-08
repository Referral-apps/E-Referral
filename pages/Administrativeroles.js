import {Link} from 'react-router-dom';
const Administrativeroles = () => {
    return (
    <section>
     <div className="row">
     <div className="col sm-12 md-6 lg-6">
         <Link to='/addfacility'>
    <div className="container back-shadow padding section hover-up pointer dashboard-card">
     <div className="row">
         <div className="col sm-12 md-12 lg-4 padding">
            <div className="dash-icon content-middle pointer">
            <span class="material-icons text-light icon size-2">
               add
             </span> 
            </div>
         </div>
         <div className="col sm-12 md-12 lg-8">
             <div className="text-larger text-center text-bold">Add Facility</div>
             <div className="hr"></div>
             <div className="text-larger text-center">
                Add A Facilty
             </div>
         </div>
     </div>
    </div>
    </Link>
</div>
     <div className="col sm-12 md-6 lg-6">
         <Link to='/addofficer'>
    <div className="container back-shadow padding section hover-up pointer dashboard-card">
     <div className="row">
         <div className="col sm-12 md-12 lg-4 padding">
            <div className="dash-icon content-middle pointer">
            <span class="material-icons text-light icon size-2">
               add
             </span> 
            </div>
         </div>
         <div className="col sm-12 md-12 lg-8">
             <div className="text-larger text-center text-bold">Add User | Officer</div>
             <div className="hr"></div>
             <div className="text-larger text-center">
                Add A User Or Officer
             </div>
         </div>
     </div>
    </div>
    </Link>
</div>
     </div>
    </section> );
}
 
export default Administrativeroles;