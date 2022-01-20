import Link from "next/link";
import { useEffect } from "react";
import Navbar from "./Navbar";

const Layout = ({children}) => {


  
    return ( 
        <section className="dashboard padding-bottom-50">
            <Navbar />
            <div className="">   
            {children}
             </div>
        </section>
     );
}
 
export default Layout;