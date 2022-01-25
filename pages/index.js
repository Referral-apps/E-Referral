import { useState, useEffect } from "react";
import  Axios  from "axios";
import Alert from '@mui/material/Alert';
const Index = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("")
  const [error, seterror] = useState("")
  const [loader, setloader] = useState("none")
  const [loaderText, setloaderText] = useState("Login")
const [alert, setalert] = useState("none")
  const HandleLogin = ()=>{
    setloader("inline-block")
    setloaderText("Loging")
    seterror(" ")
    setalert("none")
    if(email != "" && password != ""){
      Axios.post("http://e-referral-api.herokuapp.com/staff/login" ,
       {email:email , 
        password:password}
       )
      .then((res)=>{
        console.log("success")
        const data = res.data;
        let p = new Promise ((resolve, reject)=>{
        if (data != null || data != undefined){
          const serielized = JSON.stringify(data.staff)
          const token = JSON.stringify(data.token)
          localStorage.setItem("data" ,serielized)
          sessionStorage.setItem("token" , token)
          JSON.parse(localStorage.getItem("data"))
        resolve(data)
        }
        })
        p.then(()=>{
        window.location.assign("/dashboard")
        // const pursedata = JSON.parse(localStorage.getItem("data"))
        // console.log(pursedata)
        })

        setloader("none")
        setloaderText("Login")
      }).catch(err=>{
        setloader("none")
      setloaderText("Login")

        if(err.response){
          // localStorage.setItem("data" , "[]")
          setalert("block")
          seterror(err.response.status)
          seterror(err.response.message)
          if(err.response.status === 403){
            window.location.assign("/forbidden")
          }else if (err.response.status === 422){
          seterror("Incorrect email or password.")
          setalert("block")
          }
        }else if(err.request){
          console.log(err.request)
          setalert("block")

        }
      })
 
    //   Axios.post("https://e-referral-api.herokuapp.com/staff/login" , {
    //     email:email,
    //     password: password
    // }).then(()=>{
    //    alert("success")
    // }).catch(err=>{
    //   console.log(err)
    // })
    }else{
      seterror("Enter email and password.")
      setalert("block")
      setloader("none")
      setloaderText("Login")

    }
  }
  return ( 
    <section className="padding-top-100 text-small">
              <div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>
          <section className="container">
         
         <div className="center section white pointer padding round-edge login-card">
 <div className="padding">
       <div className="text-big text-center clear-both light-black">Login</div>
       <div className="hr"></div>
<div className="section">
    <div className="poppins  section text-left lable">Email:</div>
    <input type="email" className="input padding bordered full-width" placeholder="Email" onChange={(e)=>setemail(e.target.value)} />
</div>
<div className="section">
    <div className="poppins section text-left lable">Password:</div>
    <input type="password" className="input padding bordered full-width" placeholder="Password"  onChange={(e)=>setpassword(e.target.value)} />
</div>

<div className="section text-small text-red" style={{display:`${alert}`}}>
<Alert severity="error">{error}</Alert>
</div>

<div className="padding">
  <button className="button padding indigo text-white full-width" onClick={HandleLogin}>
   {loaderText} <span className="loader rotate" style={{display:`${loader}`}}></span>
  </button>
</div>

  </div>

</div>
    </section>
    </section>
   );
}
 
export default Index;