import React,{Component} from 'react';
import { Badge,  } from 'reactstrap';
import '../App.css';
class TodoHeader extends Component{
    render(){
        return(
            <h1 className="ElemCentre"> 
            <Badge color="secondary">
            {this.props.todoH}
            </Badge> 
            </h1>
        )
    }
}

export default TodoHeader;