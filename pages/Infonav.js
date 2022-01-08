const Infonav = () => {
    return ( 
        <div className="row light border-bottom">

        <div class="col sm-12 md-6 lg-8 text-left">
                 <span class="material-icons icon fit text-blue pointer">
                     call
                 </span>
                 <span>
                     +233
                 </span>

                 <span class="padding"> | </span>

                 <span class="material-icons icon fit text-blue pointer">
                     mail
                 </span>
                 <span>
                     e-referral@gmail.com
                 </span>
         </div>
         <div class="col sm-12 md-6 lg-4 text-right">
      <span><i class="fa fa-facebook pointer light-black padding"></i></span>
      <span> | </span>
      <span><i class="fa fa-instagram pointer light-black padding"></i></span>
      <span> | </span>
      <span><i class="fa fa-twitter pointer light-black padding"></i></span>
 
     </div>
      </div>
     );
}
 
export default Infonav;