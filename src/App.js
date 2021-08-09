import './App.css';
import React from 'react';
import {ThemeProvider} from "@material-ui/styles";
import {Router, Route ,Switch} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import theme from "./components/theme";
import {View, Text} from 'react-native';
import Post from './components/post';
import Client from './components/client';
import Home from './components/Home';
import Contact from './components/contact';
import About from './components/About';
import Navbar from './components/Navbar';
import user from './components/user';
import blog from './components/blog';
import SignUp from './components/SignUp';
import {Link} from "react-router-dom";
import logo from './logo.svg';
import Header from './components/header';
//import Employee from './components/employee';
//import Addemp from './components/Addemp';
//import App from './components/App';


/*class App extends Component{
  state={
   employees:[
     {id:1, name:'XYZ',email:'xyz@gmail.com',phone:'1234567890'},
     {id:1, name:'abc',email:'abc@gmail.com',phone:'7890321456'},
     {id:1, name:'mnt',email:'mnt@gmail.com',phone:'7896054321'}
   ]
  }


  addEmp =(emp)=>{
    Employee.id = Math.random();
    //let employees = [...this.state.employee,employee]
    this.setState({
      //employee:employee
    })
  }
  render(){
    return(
      <div className="App">
        <addEmp addemp={this.addemp}/>
        <Employee employee={this.state.employee}/>
      </div>
    );
  }
}*/


function App(){
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Navbar />
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/about" component={About} />
         <Route exact path="/contact" component={Contact} />
         <Route exact path="/user/:name?" component={user} />
         <Route exact path="/blog" component={blog} />
         <Route exact path="/signup" component={SignUp} />
       </Switch>
       
      </BrowserRouter>


    </div>

    <div>
    <View style={{position: 'absolute', top: '50px', left: '60px', right: 0, bottom: 0, justifyContent: 'top', alignItems: 'left'}}>
    <Text style={{ fontSize: 40 ,fontWeight: 'bold' ,color: 'red'  }} ></Text>
    </View>
    </div> 
    </>
  )
}

/*function App(){
  return(
    <div id="parent">
    <div>
      
      <div
      style={{
         backgroundImage: `url("images.jpeg")`,
         backgroundRepeat: 'no-repeat',
         backgroundSize: 'cover',
         backgroundPosition:'center',
         width:'auto',
         height:'1000px',
         color:'white'
      }}>
  );

    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
         <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/about" component={About} />
         <Route exact path="/contact" component={Contact} />
         <Route exact path="/user/:name?" component={user} />
         <Route exact path="/blog" component={blog} />
        </Switch>
      </BrowserRouter>
     </ThemeProvider>
     </div>
     </div>
  </div>
}
<BrowserRouter>     
     <Switch>
       <Route excat path="/" component={()=> <div>Home</div>}/>
       <Route excat path="/services" component={()=> <div>Services</div>}/>
       <Route excat path="/about" component={()=> <div>About Us</div>}/>
       <Route excat path="/contact" component={()=> <div>Contact Us</div>}/>
       <Route excat path="/signup" component={()=> <div>Sign Up</div>}/>
     </Switch>
      hello!
     </BrowserRouter>
*/

export default App;
