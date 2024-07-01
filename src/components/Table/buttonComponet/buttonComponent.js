import './buttonComponent.css'
<<<<<<< HEAD
const ButtonComponent1 =()=>{
    // const button1={color:'red',height:'50px',backgroundColor:'blue'}
=======
const ButtonComponent1 =(prop)=>{
    // const button1={color:'red',height:'50px',backgroundColor:'blue'}
    const {text,bgColor,onPress,width,height}=prop
>>>>>>> a2ca2a10f44d2029ba3e06543cbdb8bfa7cc3028
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