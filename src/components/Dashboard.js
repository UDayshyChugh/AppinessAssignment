import React, { Component } from 'react';
import './Dashboard.css';
import { connect } from 'react-redux';
import renderField from './renderField';
import { reduxForm, Field, SubmissionError, reset, FieldArray, formValueSelector } from 'redux-form';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {isAuth} from '../utilities';
class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            auth:isAuth(),
            data:[]

            
        };

    
      
      }
      componentDidMount(){
                let data = [
                    {
                        id:1,
                        name:"test1",
                        age:11,
                        gender:"male",
                        email:"test1@gmail.com",
                        phoneNo:"9415346313"

                    },
                    {
                        id:2,
                        name:"test1",
                        age:12,
                        gender:"male",
                        email:"test2@gmail.com",
                        phoneNo:"9415346314"

                    },
                    {
                        id:3,
                        name:"test3",
                        age:13,
                        gender:"male",
                        email:"test3@gmail.com",
                        phoneNo:"9415346315"

                    },
                    {
                        id:4,
                        name:"test4",
                        age:14,
                        gender:"male",
                        email:"test4@gmail.com",
                        phoneNo:"9415346316"

                    },
                    {
                        id:5,
                        name:"test5",
                        age:15,
                        gender:"male",
                        email:"test5@gmail.com",
                        phoneNo:"9415346317"

                    },
                    {
                        id:6,
                        name:"test6",
                        age:16,
                        gender:"male",
                        email:"test6@gmail.com",
                        phoneNo:"9415346318"

                    },

                ];

                this.setState({
                    data:data
                });


      }
     
      render() {
  
        const {auth} = this.state;
        const {data}= this.state;
        console.log(data,"datadata")
        //alert(auth);
        if(!auth){
            return <Redirect to='/'/>
        }
        return(
                <>
                <div>
                <div className="dashboardOuter">                {
                    data && data.length>0 && data.map((obj,index)=>(
                        <data className="itm">
                                <label>Id: </label>
                                <span>{obj.id}</span>
                                <br/>

                                <label>Name:</label>
                                <span>{obj.name}</span>
                                <br/>
                                <label>age:</label>
                                <span>{obj.age}</span>
                                <br/>
                                <label>gender:</label>
                                <span>{obj.gender}</span>
                                <br/>
                                <label>email:</label>
                                <span>{obj.email}</span>
                                <br/>

                                <label>Phone No:</label>
                                <span>{obj.phoneNo}</span>
                                <br/>
                        </data>
                    ))
                }
           </div>
</div>
                </>
        )
      }

}


export default withRouter(Dashboard);