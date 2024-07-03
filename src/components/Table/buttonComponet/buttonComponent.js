import './buttonComponent.css'

// const ButtonComponent1 =()=>{
    // const button1={color:'red',height:'50px',backgroundColor:'blue'}

const ButtonComponent1 =(prop)=>{
    // const button1={color:'red',height:'50px',backgroundColor:'blue'}
    const {text,bgColor,onPress,width,height}=prop



    return (
        <button   Onclick={()=>{}}
        className="button"  
        OnClick={onPress}
        style={{backgroundColor:bgColor, width:width, height:height}}
        >
        {text}
        </button>
    )
}
export default ButtonComponent1;