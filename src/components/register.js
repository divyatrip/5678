import React,{Component} from 'react';

class Register extends Component{
  
    render(){
        const {name,email,phone} = this.props;
        return(
            <div>
             <h1>Customer Details:</h1>
             <p> Name:{name}</p>
             <p>Email: {email}</p>
             <p>Phone:{phone}</p>
            </div>
        );
    }
}
    



export default Register;