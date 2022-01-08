import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
    const [sidewidth, setsidewidth] = useState('0px')
    const HandleCloseSidebar = ()=>{
        setsidewidth('0px')
        setsideoverflow('hidden')
        window.location.reload()
      }
    return (
        <section>
    <section className='sticky-top width-100-p'>
     <div class="navigation-bar hr">
     
    <div className="padding">
        <span class="material-icons icon size-2 pointer" onClick={()=>setsidewidth("250px")}>
            menu
        </span>
    </div>  

    <div>
    <span class="logo padding">E-Referral</span> 
    </div>

        <div className="row-flex">
     {/* <Link href='/'>
         <a>
         <span class="material-icons text-indigo icon size-2">
            home
        </span>
         </a>
   </Link> */}
   <div>
   

   </div>

</div>
</div>
    </section>
    <div className="sidebar" style={{width:`${sidewidth}`}}>
    <div class="text-right padding">
         <span class="text-xx-large text-white pointer" onClick={()=>setsidewidth("0px")}>
             &times;
         </span>
     </div>
           <div className='text-center pointer show-medium-down'>
           <div className="hr"></div>
           </div>

           <div className="padding">
           <div className='text-larger text-center'>
            <Link href='/'>
                <a>
                Home
                </a>
            </Link>
          </div>
          <div className="hr section"></div>
          <div class="section pointer back-shadow hover-up">

         </div>


<div class="padding">
<div className="logo">E-Referral</div>
</div>

<div className="hr"></div>
<div class="section pointer text-left">
  <Link href='/dashboard'>
      <a>
      <span class="hover-text-blue"> Dashboard</span>
      </a>
  </Link>  
</div>
<div className="hr"></div>
<div class="section pointer text-left">
  <Link href='/referpatient'>
      <a>
      <span class="hover-text-blue"> Refer Patient</span>
      </a>
  </Link>  
</div>

<div className="hr"></div>
<div class="section pointer text-left">
 <Link href='/refferedstatus'>
     <a>
     <span class="hover-text-blue"> View Referred Patient Status</span> 
     </a>
 </Link>
</div>
<div className="hr"></div>
<div class="section pointer text-left">
  <Link href='/viewreferrals'>
      <a>
      <span class="hover-text-blue">View Refferals</span>
      </a>
  </Link>  
</div>
<div className="hr"></div>
<div class="section pointer text-left">
    <span class="hover-text-blue"> View Referred Partient Statistics</span>
</div>
<div className="hr"></div>
<div class="section pointer text-left">
 <Link href='/refferalrequest'>
     <a>
     <span class="hover-text-blue"> Accept | Forward Referral</span>
     </a>
 </Link>
</div>
<div className="hr"></div>
<div class="section pointer text-left">
 <Link href='/adminisdivativeroles'>
     <a>
     <span class="hover-text-blue">  Adminisdivative Roles (Based On Levels)</span>
     </a>
 </Link>
</div>
           </div>

</div>

        </section>
     );
}
 
export default Navbar;