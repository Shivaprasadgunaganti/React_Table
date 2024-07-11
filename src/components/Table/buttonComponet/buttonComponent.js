import './buttonComponent.css'
const ButtonComponent1 =(prop)=>{
    // const button1={color:'red',height:'50px',backgroundColor:'blue'}

    // const button1={color:'red',height:'50px',backgroundColor:'blue'}
    const {text,bgColor,onPress,width,height}=prop


    return (
        <button
        className="button"  
        onClick={onPress}
        style={{backgroundColor:bgColor, width:width, height:height}}
        >
        {text}
        </button>
    )
}
export default ButtonComponent1;