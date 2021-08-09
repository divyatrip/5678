//import { react } from "@babel/types";
import React,{Component} from 'react';
import Register from './register';

class Post extends Component{
  state={
        name:'xyz',
        age:20,
        email:'',
        phone:'',
        skills:['react','javascript','html']
     }

     handleClick=(e)=>{
         console.log(this.state);
     }

     handleMouseOver=(e)=>{
         console.log(e.target,e.pageX);
     }

     handleCopy=(e)=>{
         console.log('paragraph has been copied');
     }

     handleChangeState=(e)=>{
         this.setState({
             name:'CDE',
             age:26,
             skills:['php','java','css','html']
         })
     }

     handleChange=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         });
     }

     handleSubmit=(e)=>{
         e.preventDefault();
         console.log('Name',this.state.name);
         console.log('Email',this.state.email);
         console.log('Phone',this.state.phone);


     }

    render(){
        return(
            <div>
                <h3>post component</h3>
                <p>Name:{this.state.name}</p>
                <p>Age:{this.state.name}</p>
                <p>Skills:{this.state.skills.join(',')}</p>
                <button onClick={this.handleClick}> Click Here</button>
                <button onMouseOver={this.handleMouseOver}>Mouse Over Here</button>
                <p onCopy={this.handleCopy}>test paragraph</p>
                <button onClick={this.handleChangeState}>Change State</button>
                <form onSubmit={this.handleSubmit}>
                 Name:<input type="text" name="name" onChanged={this.handleChange}/><br/>
                 Email:<input type="email" name="email" onChanged={this.handleChange}/><br/>
                 Phone:<input type="phone" name="phone" onChanged={this.handleChange}/><br/>
                    <button type="submit">Submit</button>
                </form>
                <br/>
                <Register name="XYZ" email="xyz@gmail.com" phone="2345678314"/>
                <Register name="ABc" email="abc@gmail.com" phone="9806543215"/>
            </div>
        )
    }
}

export default Post;