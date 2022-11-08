import React, { useState } from 'react'
import axios from 'axios';
import {useParams,useNavigate,Link} from 'react-router-dom';

export default () => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [errors,setErrors] = useState([])
    const [isValid,setIsValid] = useState(false);
    const navigate = useNavigate();
    const onSubmitHandler = () => {
        //prevent default behavior of the submit
        //make a post request to create a new person

        axios.post('http://127.0.0.1:8000/user', {
            firstName,
            lastName,
            email,
            password
        })
        .then(res => navigate('/pirates')) // If successful, do something with the response. 
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr)
                console.log(errorArr)
            })
            .then(()=>{if(password = confirmPassword) {
                navigate('/pirates')
              } else {
                setErrors(["passwords must match"])
              }
            })
    }  
    const onChangeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const onChangeLastName = (e) => {
        setLastName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeConfirm = (e) => {
        setConfirmPassword(e.target.value)
    }
    return (
        <>
             
             <p>
                <label>First Name</label><br/>
                <input type="text" onChange={(e)=>onChangeFirstName(e)}/>
            </p>

            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange={(e)=>onChangeLastName(e)}/>
            </p>
          
            <p>
                <label>Email</label><br/>
                <input type="text" onChange={(e)=>onChangeEmail(e)}/>
            </p>
            <p>
                <label>Password</label><br/>
                <input id="password" type="password" onChange={(e)=>onChangePassword(e)}/>
            </p>
            <p>
                <label>Confirm Password</label><br/>
                <input id="confirm" type="password" onChange={(e)=>onChangeConfirm(e)}/>
            </p>
            <button onClick={onSubmitHandler} >Submit</button>

        </>
    )
    }