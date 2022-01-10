import React from "react";
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";

const Chart = () => {
    const data = [
        {
          name: "Wa municipal",
          referredin: 4000,
          referredout: 2400,
          feedback: 2400
        },
        {
          name: "Nadowli/Kaleo",
          referredin: 4500,
          referredout: 2800,
          feedback: 3400
        },
        {
          name: "Lawra",
          referredin: 6000,
          referredout: 2900,
          feedback: 2500
        },
        {
          name: "Jirapa",
          referredin: 4000,
          referredout: 2400,
          feedback: 2400
        },
        {
          name: "Nandom",
          referredin: 5600,
          referredout: 9400,
          feedback: 3400
        },
        {
          name: "DBI",
          referredin: 4000,
          referredout: 2400,
          feedback: 2400
        },
        {
          name: "Wa east",
          referredin: 4000,
          referredout: 2400,
          feedback: 2400
        },
        {
          name: "Wa West",
          referredin: 4000,
          referredout: 2400,
          feedback: 2400
        },
        {
          name: "Lambussie",
          referredin: 4000,
          referredout: 2400,
          feedback: 2400
        },
        {
          name: "Sissala East",
          referredin: 4800,
          referredout: 2490,
          feedback: 2480
        },
        {
          name: "Sissala West",
          referredin: 2000,
          referredout: 1400,
          feedback: 2400
        },
      ];
      
    return ( 
        <section>
    <BarChart
      width={1400}
      overFlowX={'scroll'}
      height={300}
      data={data}
      margin={{
      top: 20,
      right: 10,
      left: 10,
      bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="referredin" stackId="a" fill="#8884d8" />
      <Bar dataKey="referredout" stackId="a" fill="#82ca9d" />
      <Bar dataKey="feedback" stackId="a" fill="#673ab7" />
    </BarChart>
        </section>
     );
}
 
export default Chart;