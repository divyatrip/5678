import React ,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import Logo from '../Assets/images.jpeg';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    render(){
        // setTimeout(()=>{
        //     this.props.history.push('/contact');
        // });
        return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div style={{ height: '50px', width: '50px' }}>
            <img src={Logo} style={{ height: '100%', width: '100%', objectFit:'contain' }} alt="second logo"/>
          </div>
          <a className="navbar-brand" href="#">Tortilicious</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="tab" 
           data-bs-target="#navbarSupportedContent" 
           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ width: '250px',display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> 
              <li className="nav-item">
              <Link to="/home">Home</Link>
              </li>

              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>

              <li className="nav-item">
              <Link to="/contact">Contact</Link>
              </li>

              <li className="nav-item">
              <Link to="/blog">Blog</Link>
              </li> 
                  
            </ul>
            
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ width: '250px',display: 'flex', justifyContent: 'space-between', alignItems: 'right' }}> 
              <li className="nav-item">
              <Link to="/Signup">Sign Up</Link>
              </li>
              </ul>
          </div>
        </div>
      </nav>
        </div>
        )
    }
 }


 export default withRouter(Navbar);
