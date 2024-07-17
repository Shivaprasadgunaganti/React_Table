import { useEffect } from "react"
import Productdetails from "../../Screen/product-details"

const loggingComponet =()=>{
    return (props) =>{
        useEffect(()=>{
            console.log(props)
        },[props])
        return  <Productdetails/>
    }
}
export default loggingComponet