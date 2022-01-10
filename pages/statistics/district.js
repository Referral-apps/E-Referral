import { useState } from "react";

const District = () => {
const [search, setsearch] = useState("")

const patientdata = [
    {
        facility:"Wa Health Facility",
        referredin:"30",
        referredout:"35",
        forwarded:"380",

    },
    {
        facility:"Jang Health Facility",
        referredin:"30",
        referredout:"345",
        forwarded:"38",

    },
    {
        facility:"Nandom Health Facility",
        referredin:"60",
        referredout:"35",
        forwarded:"68",

    },
    {
        facility:"Bussie Health Facility",
        referredin:"350",
        referredout:"95",
        forwarded:"38",

    },
    {
        facility:"Sawla Health Facility",
        referredin:"60",
        referredout:"35",
        forwarded:"68",

    },
    {
        facility:"Busa Health Facility",
        referredin:"35",
        referredout:"45",
        forwarded:"38",

    },
    
]


    return ( 
        <section className="padding-top-100">
<section>

<div className="section container">
<div className="h2">District Statistics</div>
<div className="section">
<input type="text" className="input bordered padding" placeholder="search patient" onChange={(e)=>setsearch(e.target.value)}/>
</div>
</div>
<div className="container">
<div className="horizontal-scroll">

<table className="table stripped text-small">
<thead className="indigo">
    <th>HEALTH FACILITY</th>
    <th>NO REFERRED IN</th>
    <th>NO REFERRED OUT</th>
    <th>FORWARDED</th>

</thead>
{
    patientdata.filter(data=>{
     if(search === ""){
         return patientdata;
     }else if(
     data.facility.trim().toLowerCase().includes(search.trim().toLowerCase())
     ){
         return data;
     }
    }).map(facility =>(
        <tr key={facility.facility}>
            <td>{facility.facility}</td>
            <td>{facility.referredin}</td>
            <td>{facility.referredout}</td>
            <td>{facility.forwarded}</td>
        </tr>
    ))
}


</table>

</div>


</div>
</section> 
    </section>
     );
}
 
export default District;