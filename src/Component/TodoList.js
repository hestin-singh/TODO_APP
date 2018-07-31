import React from 'react';
import { ListGroup,ListGroupItem  } from 'reactstrap';

// class TodoList extends Component{
 
// //    
//     render(){
//         const todos = this.props.todos;
//         console.log(todos);
//         return(
//             <div>
//                 <ul>
//                 {todos.map((todo)=>{
//                     return <li key ={todo}>{todo}</li>
//                 })}
//                 </ul>
//             </div>
//         );
//     }
// }
const TodoList =(props)=>{
    const todos = props.todos;

    return(
        <div>
            {todos.map((todo)=>{
                return (
                    <ListGroup key={todo} >
                    <ListGroupItem color="info">    
                        {todo} 
                        <button className="btn btn-danger float-right" 
                        onClick={(e)=>{
                            props.handleDeleteTodo(todo);
                        } }
                        >Remove</button>
                    </ListGroupItem > 
                    </ListGroup>
                   
                    )
            })}
        </div>
    )
}
export default TodoList;