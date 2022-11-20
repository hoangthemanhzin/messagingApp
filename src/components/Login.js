import React from 'react';
import { GoogleOutlined, FacebookOutlined, MailOutlined } from '@ant-design/icons';
import "firebase/app";
import firebase from "firebase/app";
import { auth } from '../firebase';
const Login = () => {
    return (
        <div id = "login-page">
            <div id = "login-card">
                <h2>Welcome to EConnect!</h2>
                <p></p>
                <br/> <br/>
                    <div className = "login-button email">
                        <MailOutlined /> Sign in with email
                    </div>
                    <br/> <br/>
                    <div className = "login-button google"
                        onClick = {() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                    >
                        <GoogleOutlined /> Sign In with Google
                        
                    </div>

                    <br/> <br/>
                    <div className = "login-button facebook"
                        onClick = {() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                    >
                        <FacebookOutlined /> Sign In with Facebook
                        
                    </div>
                    <br/> <br/> <p className = "or">---- OR ----</p> <br/>
                    <div className = "login-button signup">
                        Sign up now!
                    </div>
                    
                </div>
        </div>
    );
}
export default Login;