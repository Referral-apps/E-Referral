const index = () => {
  return ( 
    <section className="padding-top-100">
              <div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>
          <section className="container">
         
         <div className="center section white pointer padding back-shadow round-edge login-card">
 <div className="padding">
       <div className="text-big text-center clear-both light-black">Login</div>
       <div className="hr"></div>
<div className="section">
    <div className="poppins  section text-left lable">Username:</div>
    <input type="text" className="input padding bordered full-width" placeholder="Username" />
</div>
<div className="section">
    <div className="poppins section text-left lable">Password:</div>
    <input type="password" className="input padding bordered full-width" placeholder="Password" />
</div>


<div className="padding">
  <button className="button padding indigo text-white full-width">Login</button>
</div>

  </div>

</div>
    </section>
    </section>
   );
}
 
export default index;