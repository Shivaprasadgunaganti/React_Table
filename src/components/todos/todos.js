import { Component } from "react"


class TodoComponent extends Component {
    state={
        todo:['hello']
    
    }
    render () {
        return (
        
            <>{this.state.todo.map((eachtodo)=>{
                return <h2>{eachtodo}</h2>
            })}
            </>
        )
    }
    
}

export default TodoComponent