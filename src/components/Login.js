import React, { Component } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import renderField from './renderField';
import { reduxForm, Field, SubmissionError, reset, FieldArray, formValueSelector } from 'redux-form';
import validate from './ValidateLogin';
import {ToastsContainer, ToastsStore, toast,ToastsContainerPosition} from 'react-toasts';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {isAuth} from '../utilities';
class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            auth:isAuth(),
        };

    
      
      }
      submitForm(values){
        this.props.history.push('/dashboard');
          console.log(values);
          if(values.userName == "hruday@gmail.com" && values.password == "hruday123"){
              var dt = {};
              dt.userName = values.userName;
              dt.password = values.password;
                            localStorage.setItem("assignmentUser",dt);
          }
          else{
            ToastsStore.error('Wrong credentials');
          }
      
      }
      render() {
        const {handleSubmit, pristine, submitting} = this.props;
        const {auth} = this.state;
        //alert(auth);
        if(auth){
            return <Redirect to='/dashboard'/>
        }
        return(
          
                <div className="mainForm">
                   
                         <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
                           
                       <div className="loginBlock">
                         <button className="appiness"> appiness </button>
                        <div className="formDiv">
                    
                        <Field 
                          name="userName"
                          component={renderField}
                          type="text"
                          className="inputDiv"
                          label="USER NAME"
                          placeholder="Eg. John"
                        />
                        {/* <label>User Name</label>
                        <div className="inputDiv"> 
                        
                     <input className="customInput" type="text"/>
                     </div> */}
                      <Field
                          name="password"
                          component={renderField}
                          type="password"
                          className="inputDiv"
                          label="PASSWORD"
                          placeholder="Eg. John"
                        />
                        <br/>
                          <button type="submit" disabled={submitting} className="mybutton">LOGIN{submitting && <i className="fa fa-spinner fa-spin"></i>}</button>
                     </div>
                   
                    </div>
                 
                    </form>
                </div>
        )
      }

}

Login = reduxForm({
    form: 'Login',
    destroyOnUnmount: false,
    validate
  })(Login)
// export default Login;
export default withRouter(Login);