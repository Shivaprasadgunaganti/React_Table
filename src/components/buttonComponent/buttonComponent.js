// import styles from './button.module.css'
const ButtonComponent1 = (prop) => {
  const {text,bgColor,onPress,width,height} =prop
    return (
     <button onClick={onPress}
     
     style={{backgroundColor:bgColor,width:width,height:height}}
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
     >
      {text}
     </button>
    )   
}
export default ButtonComponent1;
// const ButtonComponent1 = (prop) => {

//   const {text,bgColor,onPress,width} =prop
//     return (
//      <button onClick={onPress}
//      className={styles.button}
//      style={{backgroundColor:bgColor,width:width}}>
//       {text}
//      </button>
//     );
//   };
//   export default ButtonComponent1;