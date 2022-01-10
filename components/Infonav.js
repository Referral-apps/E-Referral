const Infonav = () => {
    return ( 
        <div className="row light border-bottom">

        <div className="col sm-12 md-6 lg-8 text-left">
                 <span className="material-icons icon fit text-blue pointer">
                     call
                 </span>
                 <span>
                     +233
                 </span>

                 <span className="padding"> | </span>

                 <span className="material-icons icon fit text-blue pointer">
                     mail
                 </span>
                 <span>
                     e-referral@gmail.com
                 </span>
         </div>
         <div className="col sm-12 md-6 lg-4 text-right">
      <span><i className="fa fa-facebook pointer light-black padding"></i></span>
      <span> | </span>
      <span><i className="fa fa-instagram pointer light-black padding"></i></span>
      <span> | </span>
      <span><i className="fa fa-twitter pointer light-black padding"></i></span>
 
     </div>
      </div>
     );
}
 
export default Infonav;