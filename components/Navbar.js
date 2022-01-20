import Link from "next/link"
import { useEffect, useState } from "react"
import Infonav from "./Infonav"

const Navbar = () => {
    const [loginshow, setloginshow] = useState("none")
    const [data, setdata] = useState("")
    const [staff, setstaff] = useState("")
useEffect(() => {
if(JSON.parse(sessionStorage.getItem("token")) != null || JSON.parse(sessionStorage.getItem("token")) != undefined){
    const user = JSON.parse(localStorage.getItem("data"))
    const p = new Promise ((resolve , reject)=>{
        if(user.length != 0){
        resolve(user)
        }else{
    reject()
        }
    })
    p.then(currentuser=>{
    //user is login
    console.log("online")
    setloginshow("inline-block")
    setstaff(user)
    }).catch(()=>{ 
        //offline 
        
    })
    

}
},[])

  
      
    const [sidewidth, setsidewidth] = useState('0px')
    const HandleCloseSidebar = ()=>{
        setsidewidth('0px')
        setsideoverflow('hidden')
        window.location.reload()
      }
      const Logout = ()=>{
        sessionStorage.removeItem("token")
        window.location.assign("/")
    //   let p = new Promise ((resolve, reject)=>{
    //   localStorage.setItem("data" , JSON.stringify(""))
    //   })
    //   p.then(()=>window.location.assign("/"))
      }
    return (
        <section style={{display:`${loginshow}`}}>
    <section className='fixed-top width-100-p'>

     <div className="navigation-bar white hr">
     
{
    staff != "" &&
    <div className="padding">
    <span className="material-icons icon size-2 pointer" onClick={()=>setsidewidth("250px")}>
        menu
    </span>
</div>  
}

    <div>
    <span className="logo padding">E-Referral</span> 
    </div>

  

{
    staff != "" && 

<div className="dropdown-hover text-small">
    <div className="drop-button">
        <div className="button h6 header">                      
        {staff.firstName} {staff.middleName} {staff.lastName} <i className="fas fa-angle-down"></i>
 </div>
    </div>
     <div className="drop-menu white item-hoverable text-black">
         <div className="width-300">
            <div className="drop-item hr">
            <Link href="/user">
             <a className="text-black">
        <div className="row-flex">
                <div>
                    <img src="/avatar.png" className="width-50 height-50 circle" alt="" />
                </div>
                <div className="padding">
                    <div className="h6">
                        {staff.firstName} {staff.middleName} {staff.lastName}
                    </div>
                    <div className="text-small">{staff.role}</div>
                </div>
            </div>
             </a>
    </Link>
            </div>
    <div className="drop-item">
        <Link href="/change/password">
            <a>Change password</a>
        </Link>
    </div>
    <div className="drop-item" onClick={Logout}><a className="drop-link">Logout </a></div>
         </div>
     </div>
</div>
}
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
           <div className='text-larger text-center padding-20'>
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
     <span className="hover-text-blue">  Administrative Roles (Based On Levels)</span>
     </a>
 </Link>
</div>
           </div>

</div>

        </section>
     );
}
 
export default Navbar;