import React,{Component} from 'react'
import { FormGroup, Button } from 'reactstrap';
import '../App.css';
class TodoInput extends Component{
    constructor(props){
        super(props);
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    handleAddItem(e){
        
        e.preventDefault();
        const option =e.target.elements.option.value.trim();
        if(option){
           this.props.handleAddItem(option);
        }  
       
    }
   
    render(){
        return(
            <div >
                <form onSubmit ={this.handleAddItem}>
                <FormGroup className="ElemCentre">
                <input type="text" placeholder="Enter the todo" name="option" />
                
                <Button color="primary" outline size='sm' >Add</Button>
                </FormGroup>
                </form>
            </div>
        );
    }
}
export default TodoInput;