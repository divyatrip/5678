
/*import React, {Component} from 'react';

class Addemp extends Component{
    state = {
        name:null,
        email:null,
        Phone:null
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addemp(this.state);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Name:<input type="text" name="name" onChange={this.handleChange}/><br/>
                    Email:<input type="text" name="email" onChange={this.handleChange}/><br/>
                    Phone:<input type="text" name="phone" onChange={this.handleChange}/><br/>
                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default Addemp;*/