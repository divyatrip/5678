import React ,{Component} from 'react';
import { Container, Grid, TextField } from "@material-ui/core";

//import axios from "axios";


class SignUp extends Component{
    render(){
        return(
         <div>
            <form>
                <div class="mb-3">
                    <label for="InputFirstName" class="form-label">First Name</label>
                    <input type="text" width="50%" padding= "12px 20px" margin="8px 0"  id="FirstName" aria-describedby="firstName" />
                    <div id="firstName" class="form-text"></div>
                 </div>

                 <div class="mb-3">
                    <label for="InputLastName" class="form-label">Last Name</label>
                    <input type="text" width="50%" padding= "12px 20px" margin="8px 0"
                      id="InputLastName" aria-describedby="LastName" />
                    <div id="firstName" class="form-text"></div>
                 </div>
                
                
                <div class="mb-3">
                    <label for="" class="form-label">Email address</label>
                    <input type="email" width="50%" padding= "12px 20px" margin="8px 0"  id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text"></div>
                 </div>
                
                <div class="mb-3">
                    <label for="exampleInputPassword" class="form-label">Password</label>
                    <input type="password" width="50%" padding= "12px 20px" margin="8px 0"  id="exampleInputPassword1"/>
                </div>

                <div class="mb-3 form-check">
                    <input type="checkbox"  class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>

               <button type="submit" class="btn btn-primary">Submit</button>
           </form>
        </div>
      )
    }
 }


/*class SignUp extends Component{
     render(){
         return(
            <Container>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <TextField fullWidth label="firstName" variant="outlined" />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField fullWidth label="lastName" variant="outlined" />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField fullWidth label="email" variant="outlined" />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField fullWidth label="password" variant="outlined" />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField fullWidth label="confirm password" variant="outlined" />
              </Grid>
            </Grid>
            <button type="submit" class="btn btn-primary">Submit</button>
          </Container>

        
         )
        }
    }*/

 export default SignUp;



/*import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const SignUp = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Sign up</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
            error="wrong" success="right" />
          <MDBInput label="Your password" icon="lock" group type="password" validate />
        </div>
        <div className="text-center">
          <MDBBtn color="primary">Register</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default SignUp;*/

 