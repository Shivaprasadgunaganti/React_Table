
import styles from './button.module.css'
const ButtonComponent1 = (prop) => {

  const {text,bgColor,onPress,width} =prop
    return (
     <button onClick={onPress}
     className={styles.button}
     style={{backgroundColor:bgColor,width:width}}>
      {text}
     </button>
    );
  };
  export default ButtonComponent1;

