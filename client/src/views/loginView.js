import React, { useEffect, useState } from 'react'
import axios from 'axios';
import LoginComponent from '../components/LoginComponent';
import RegisterComponent from '../components/RegisterComponent';
const Main = (props) => {

    return (
        <div style={{"marginLeft":"1%", "display":"flex", "flexDirection":"row"}}>

            <div style={{"marginLeft":"10%"}} id='left'>
                <h1>Register</h1>
                <RegisterComponent />
            </div>
            <div style={{"marginLeft":"50%"}} id='right'>
                <h1>Login</h1>
                <LoginComponent />
            </div>
        </div>
    )
}
    
export default Main;