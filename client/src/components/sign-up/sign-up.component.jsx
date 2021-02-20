import React , { useState } from 'react';

import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-buttom/custom-buttom.component';

import { auth  , createUserProfilDocument } from '../../firebase/firebase.utils';

import { signUpStart  }  from '../../redux/user/user.action';

import './sign-up.styles.scss';


const SignUp = ({ signUpStart }) => {

    const [ userCredentials  , setCredentials ] = useState({  email:'' , password: '' , password:'' , confirmPassword:'' }); 
   
    const { displayName , email , password , confirmPassword } =  userCredentials ;  

    const  handleSubmit = async event => {

        event.preventDefault();
       

        if ( password !== confirmPassword ) {
            alert("password dont match");
            return;
        }

        signUpStart({ displayName , email , password  });

    };

    const  handleChange = event => {
        const { name , value } = event.target;

        setCredentials({ ...userCredentials, [name ]: value });
    }

 
       

        return(
            <div className="sign-up">
                <h2 className="title">
                    I do not have an account 
                </h2>
                <span> Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>

                    <FormInput name="displayName" type="text" value={displayName} handleChange={handleChange} label="Display" required />

                    <FormInput name="email" type="email" value={email}  handleChange={handleChange} label="email" required />
                    
                    <FormInput name="password" type="password" value={password}  handleChange={handleChange} label="password" required/>

                    <FormInput name="confirmPassword" type="password" value={confirmPassword} handleChange={handleChange} label="confirmpassword" required/>
                    
                    <CustomButton type="submit">SIGN UP  </CustomButton> 

                </form>
            </div>
        )
    }


const mapDispatchToProps = dispatch => ({

    signUpStart : userCredentials => dispatch(signUpStart(userCredentials))
    

})

export default connect(null , mapDispatchToProps ) (SignUp);