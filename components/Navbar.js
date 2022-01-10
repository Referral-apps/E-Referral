import Link from "next/link"
import { useState } from "react"
import Infonav from "./Infonav"

const Navbar = () => {
    const [sidewidth, setsidewidth] = useState('0px')
    const HandleCloseSidebar = ()=>{
        setsidewidth('0px')
        setsideoverflow('hidden')
        window.location.reload()
      }
    return (
        <section>
    <section className='fixed-top width-100-p'>

     <div className="navigation-bar white hr">
     
    <div className="padding">
        <span className="material-icons icon size-2 pointer" onClick={()=>setsidewidth("250px")}>
            menu
        </span>
    </div>  

    <div>
    <span className="logo padding">E-Referral</span> 
    </div>

        <div className="row-flex">
     {/* <Link href='/'>
         <a className="text-white hover-text-blue">
         <span className="material-icons text-indigo icon size-2">
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
    <div className="text-right padding">
         <span className="text-xx-large text-white pointer" onClick={()=>setsidewidth("0px")}>
             &times;
         </span>
     </div>
           <div className='text-center pointer show-medium-down'>
           <div className="hr"></div>
           </div>

           <div className="padding">
           <div className='text-larger text-center padding'>
            <Link href='/'>
                <a className="text-white hover-text-blue">
                <div className="logo text-white">E-Referral</div>
                </a>
            </Link>
          </div>

<div className="hr"></div>
<div className="section pointer text-left">
  <Link href='/dashboard'>
      <a className="text-white hover-text-blue">
      <span className="hover-text-blue"> Dashboard</span>
      </a>
  </Link>  
</div>
<div className="hr"></div>
<div className="section pointer text-left">
  <Link href='/referpatient'>
      <a className="text-white hover-text-blue">
      <span className="hover-text-blue"> Refer Patient</span>
      </a>
  </Link>  
</div>

<div className="hr"></div>
<div className="section pointer text-left">
 <Link href='/refferedstatus'>
     <a className="text-white hover-text-blue">
     <span className="hover-text-blue"> View Referred Patient Status</span> 
     </a>
 </Link>
</div>
<div className="hr"></div>
<div className="section pointer text-left">
  <Link href='/viewreferrals'>
      <a className="text-white hover-text-blue">
      <span className="hover-text-blue">View Refferals</span>
      </a>
  </Link>  
</div>
<div className="hr"></div>
<div className="section pointer text-left">
  <Link href='/statistics/regional'>
      <a className="text-white hover-text-blue">
      <span className="hover-text-blue">Regional Statistics</span>
      </a>
  </Link>  
</div>
<div className="hr"></div>
<div className="section pointer text-left">
  <Link href='/statistics/district'>
      <a className="text-white hover-text-blue">
      <span className="hover-text-blue">District Statistics</span>
      </a>
  </Link>  
</div>

<div className="hr"></div>
<div className="section pointer text-left">
 <Link href='/refferalrequest'>
     <a className="text-white hover-text-blue">
     <span className="hover-text-blue"> Accept | Forward Referral</span>
     </a>
 </Link>
</div>
<div className="hr"></div>
<div className="section pointer text-left">
 <Link href='/administration'>
     <a className="text-white hover-text-blue">
     <span className="hover-text-blue">  Adminisdivative Roles (Based On Levels)</span>
     </a>
 </Link>
</div>
           </div>

</div>

        </section>
     );
}
 
export default Navbar;