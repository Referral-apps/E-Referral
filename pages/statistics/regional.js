import { useState } from "react";
import Chart from "../Chart";

const Regional = () => {

const [search, setsearch] = useState("")
const patientdata = [
{
facility:"Wa Health Facility",
referredin:"30",
referredout:"35",
forwarded:"380",
feedback:"90"
},
{
facility:"Jang Health Facility",
referredin:"30",
referredout:"345",
forwarded:"38",
feedback:"90"
},
{
facility:"Nandom Health Facility",
referredin:"60",
referredout:"35",
forwarded:"68",
feedback:"90"
},
{
facility:"Bussie Health Facility",
referredin:"350",
referredout:"95",
forwarded:"38",
feedback:"90"
},
{
facility:"Sawla Health Facility",
referredin:"60",
referredout:"35",
forwarded:"68",
feedback:"90"
},
{
facility:"Busa Health Facility",
referredin:"35",
referredout:"45",
forwarded:"38",
feedback:"90"
}

]


return ( 
<section className="padding-top-100">
<div className="container">
<div className="h2 padding">Regional Statistics</div>
    <div className="vertical-scroll">
    <Chart />
    </div>
</div>
<section className="container padding-top-50">
<div className="section">
<input type="text" className="input bordered padding" placeholder="search patient" onChange={(e)=>setsearch(e.target.value)}/>
</div>
<div className="horizontal-scroll">

<table className="table stripped text-small padding-top-100">
<thead className="indigo">
<th>HEALTH FACILITY</th>
<th>NO REFERRED IN</th>
<th>NO REFERRED OUT</th>
<th>FORWARDED</th>
<th>FEEDBACK</th>

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
    <td>{facility.feedback}</td>
</tr>
))
}


</table>

</div>

</section> 
</section>
);
}

export default Regional;