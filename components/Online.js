import { useEffect } from "react"
const Online = () => {
    useEffect(() => {

        if(JSON.parse(sessionStorage.getItem("token")) != null || JSON.parse(sessionStorage.getItem("token")) != undefined){
            // const user = JSON.parse(localStorage.getItem("data"))
            //user is login
        }else{
        window.location.assign("/")
        }
        },[])
    return ( 
        <></>
     );
}
 
export default Online;