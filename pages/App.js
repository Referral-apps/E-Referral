// import './App.css';
// import './css/fun.css';
// import './index.css'
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
// import {useState, useEffect} from 'react'
// import Dashboard from './Dashboard';
// import Login from './Login'
// import RefferalRequest from './RefferalRequest';
// import ReferPatient from './ReferPatient';
// import Navbar from './Navbar';
// import Infonav from './Infonav';
// import Refferedstatus from './Refferedstatus';
// import Addfacility from './Addfacility';
// import Addofficer from './Addofficer';
// import Administrativeroles from './Administrativeroles';
// import ViewRefferals from './Viewrefferals';


// function App() {
//   const [sidewidth, setsidewidth] = useState('15%')
//   const [sideoverflow, setsideoverflow] = useState('')
//   const [contentwidth, setcontentwidth] = useState('85%')
// const [contentpadding, setcontentpadding] = useState('10px')
//   const Handlesidebar = ()=>{
//   if(sidewidth == '15%'){
//     setsidewidth('0%')
//     setsideoverflow('hidden')
//     setcontentwidth('100%')
//     setcontentpadding('0px')
//   }else{
//     setcontentwidth('85%')
//     setsidewidth('15%')
//     setsideoverflow('visible')
//     setcontentpadding('10px')
    
 
//   }

 
//   }

//   const HandleCloseSidebar = ()=>{
//     setsidewidth('0px')
//     setsideoverflow('hidden')
//     window.location.reload()
//   }
//   return (
//     <Router>
//     <div className="App">

//     <div className='dashboard'>
//          <div className="dashboard-side light" style={{width:`${sidewidth}`, overFlow:`${sideoverflow}`}}>
//            <div className='text-center pointer show-medium-down'>
//            <div className="hr"></div>
//            </div>
//           <div className='text-larger text-center'>
//             <Link to='/'>Home</Link>
//           </div>
//           <div className="hr section"></div>
//           <div class="section pointer back-shadow hover-up">

//          </div>


// <div class="section pointer text-left">
// <div className="logo">E-Referral</div>
// </div>

// <div className="hr"></div>
// <div class="section pointer text-left">
//   <Link to='/referpatient'><span class="hover-text-blue"> Refer Patient</span></Link>  
// </div>

// <div className="hr"></div>
// <div class="section pointer text-left">
//  <Link to='/refferedstatus'><span class="hover-text-blue"> View Referred Patient Status</span> </Link>
// </div>
// <div className="hr"></div>
// <div class="section pointer text-left">
//   <Link to='/viewrefferals'><span class="hover-text-blue">View Refferals</span></Link>  
// </div>
// <div className="hr"></div>
// <div class="section pointer text-left">
//     <span class="hover-text-blue"> View Referred Partient Statistics</span>
// </div>
// <div className="hr"></div>
// <div class="section pointer text-left">
//  <Link to='/refferalrequest'><span class="hover-text-blue"> Accept | Forward Referral</span></Link>
// </div>
// <div className="hr"></div>
// <div class="section pointer text-left">
//  <Link to='/administrativeroles'><span class="hover-text-blue">  Administrative Roles (Based On Levels)</span></Link>
// </div>

// </div>
//      <div className="dashboard-content" style={{width:`${contentwidth}`,position:`${contentpadding}`}}>   
//       <Infonav />
//      <Navbar Handlesidebar={Handlesidebar} /> 
//      <Switch>
//      <Route exact path = '/' ><Dashboard/></Route>
//      <Route path='/Login'><Login /></Route>
//      <Route path='/refferalrequest'><RefferalRequest /></Route>
//      <Route path='/referpatient'><ReferPatient /></Route>
//      <Route path='/refferedstatus'><Refferedstatus /></Route>
//      <Route path='/addfacility'> <Addfacility /> </Route>
//      <Route path='/addofficer'> <Addofficer /> </Route>
//      <Route path='/administrativeroles'> <Administrativeroles /> </Route>
//      <Route path='/viewrefferals'> <ViewRefferals /> </Route>
//     </Switch>

//     </div>
//     </div>
//     </div>
//     </Router>
//   );
// }

// export default App;
