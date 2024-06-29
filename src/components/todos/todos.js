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