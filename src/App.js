import React, { Component } from 'react';
import { Card} from 'reactstrap';
import TodoHeader from './Component/todoHeader';
import TodoInput from './Component/Todoinput';
import TodoList from './Component/TodoList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todos:[]
    }
    this.handleAddItem =this.handleAddItem.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }
  handleAddItem(todo){
      this.setState((prevState)=>{
        
        return {
          todos: prevState.todos.concat(todo)
        }
      });
    }
  handleDeleteTodo(todoRemove){
   this.setState((prevState)=>{
     return{
       todos: prevState.todos.filter((todo)=>{
        return todoRemove !== todo;
       })
     }
   })
  
}

  
  render() {
    const todoH="TODO LIST";
    
    return (
      <div  className="align-items-center App">
        <Card>
          
        <TodoHeader todoH={todoH}  title='Fun with todo'/>
        <TodoList todos={this.state.todos} 
        handleDeleteTodo = {this.handleDeleteTodo}/>
        <TodoInput 
        handleAddItem ={this.handleAddItem} />
        
       
        </Card>
         
      </div>
    );
  }
}

export default App;
