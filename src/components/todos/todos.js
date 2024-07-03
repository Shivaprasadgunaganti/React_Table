
import { Component } from "react"


class TodoComponent extends Component {
    state={
        todo:['hello']
    
    }
    render () {
        return (
        
            <>{this.state.todo.map((eachtodo)=>{
                return  <h3>{eachtodo}</h3>  
        
            })}
            </>
        )
    }
    
}

export default TodoComponent    


// import { Component } from "react";
// import ButtonComponent1 from "../Table/buttonComponet/buttonComponent";
// class TodoComponent extends Component {
//   state = {
//     todo: ["wake up at 7:00 am", "class at 9:00am"],
//   };
//   todoHandler = () => {
//     this.setState({
//       todo: [...this.state.todo, "dinner at 8pm"],
//     });
//   };

//   todoUpdateHandler = (index) =>{
    
//     let newTodo=this.state.todo
//     newTodo[index]='wake up at 8:00am'

//     this.setState({
//       todo:newTodo
//     })
//   }
//   todoDeleteHandler = (index) => {

//     let newTodo=this.state.todo.filter((eachtodo,i) =>(index !== i))
    
//     this.setState({
//       todo:newTodo
//     })
//   };
//   render() {
//     return (
//       <>
//         <ol>
//           {this.state.todo.map((eachtodo, index) => {
//             return (
//               <>
//                 <li>{eachtodo}</li>
//                 <ButtonComponent1
//                   text={"update"}
//                   onPress={() => this.todoUpdateHandler(index)}
//                 />
//                 <ButtonComponent1
//                   text={"delete"}
//                   onPress={() => this.todoDeleteHandler(index)}
//                 />
//               </>
//             );
//           })}
//         </ol>
//         <ButtonComponent1 height={50} width={50} onPress={this.todoHandler} text={'add todo'} />
//       </>
//     );
//   }
// }

// export default TodoComponent;
