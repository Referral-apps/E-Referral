import { useEffect, useState } from "react"

const User = () => {
    const [loginshow, setloginshow] = useState("none")
    const [data, setdata] = useState("")
    const [staff, setstaff] = useState("")
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("data"))
        if( user.length != 0){
            //user is login
            setloginshow("inline-block")
            setstaff(user)
        }else{
            //offline
            console.log("Offline")
        }  
    }, [])

    return ( 
        <section className="padding-top-100">
                 {
                        data != "" &&

                        <section>
                                        <div className="row">
                <div className="col sm-12 md-6 lg-6">
                    <div className="text-center">
                        <img src="/avatar.png" className="height-200 width-200 circle" alt="" />
                    </div>
                </div>
                <div className="col sm-12 md-6 lg-6 padding">
                    <div className="h1 header">
                    {staff.facility}
                    </div>
                    <div className="h2 header">
                    {staff.firstName} {staff.middleName} {staff.lastName}
                    </div>
                    <div className="h4 header">
                    <span>Role: </span> {staff.role}
                    </div>
                    <div className="header h4">
                    <span>Contact: </span> {staff.contact}
                    </div>
                    {/* <div className="">
                        <span>Facility: </span> <span>{staff.facility}</span>
                    </div> */}
                </div>
            </div>
                        </section>
                    }

        </section>
     );
}
 
export default User;