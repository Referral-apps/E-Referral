import { useEffect } from "react"
const Super = () => {
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("data"))
        if(data.role != "Super"){
            window.location.assign("/forbidden")
        }
     }, []);
    return ( 
        <></>
     );
}
 
export default Super;