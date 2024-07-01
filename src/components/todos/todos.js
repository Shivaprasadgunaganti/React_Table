// import { Component } from "react"

// class TodoComponent extends Component {
//     state={
//         todo:['hello']
    
//     }
//     render () {
//         return (
        
//             <>{this.state.todo.map((eachtodo)=>{
//                 return  <h3>{eachtodo}</h3>  
        
//             })}
//             </>
//         )
//     }
    
// }

// export default TodoComponent  
import ButtonComponent1 from "../Table/buttonComponet/buttonComponent";

const { Component } = require("react");


class Todocompoment extends Component {
    state={
        todos:['wake up at 7:00 am','class at 9:00 am']
    }
    render() {
        return (
            <>
            {
            
                this.state.todos.map((eachtodo)=>{
                   return <h2>{eachtodo}</h2>
                })};
               <ButtonComponent1 text={'add todo'}/>
            </>
        )
    }

}
export default Todocompoment
