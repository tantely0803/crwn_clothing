import React , { useState } from 'react';

import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component'; 
import CustomButtom from '../custom-buttom/custom-buttom.component';
import './sign-in.styles.scss';

import { googleSignInStart , emailSignInStart } from '../../redux/user/user.action';


const  SigIn = ({emailSignInStart , googleSignInStart} ) => {
    const [ userCredentials  , setCredentials ] = useState({  email:'' , password: '' });
     

    const  handlesubmit = async event => {
        event.preventDefault();

        const {  email , password  } = userCredentials;  

        emailSignInStart( email , password );
        

    };

    const { email , password } = userCredentials;

    const handleChange = event => {
        const { value , name } = event.target;
        setCredentials({ ...userCredentials, [name ]: value });
    };

   

    
        return(
            <div className="sign-in">
                <h2>I already have an account </h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handlesubmit} >
                    <FormInput name="email" type="email" value={email} required handleChange={handleChange} label="email" />
                    
                    <FormInput name="password" type="password" value={password} required handleChange={handleChange} label="password"/>
                    
                    <div className="buttons">
                        <CustomButtom type="submit">Sign in</CustomButtom>
                        <CustomButtom type="button" onClick={googleSignInStart} isGoogleSignIn >
                        {``}
                        Sign in with Google
                        {``}
                        </CustomButtom>
                    </div>
                   
                </form>
            </div>
        )
    }


const mapDispatchToProps = dispatch => ({

    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart : ( email , password ) => dispatch(emailSignInStart({ email , password }) )

})

export default connect( null , mapDispatchToProps  ) (SigIn);