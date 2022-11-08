import React, { useState } from 'react'
import axios from 'axios';
import {useParams,useNavigate,Link, redirect} from 'react-router-dom';

export default () => {
    //keep track of what is being typed via useState hook
    const [email, setEmail] = useState(""); 
    const [password,setPassword] = useState("");
    const [user,setUser] = useState([]);
    const navigate = useNavigate();
    const [errors,setErrors] = useState([])
    const [isValid,setIsValid] = useState(false);
    //handler when the form is submitted

    const onSubmitHandler = () => {
        axios.get('http://localhost:8000/users')
            .then(res=> {
                for(var i = 0;i<res.data.length;i++){
                   if(res.data[i].email === email){
                    setUser(res.data[i])
                   }
                }
            })
        // .then(res =>navigate('/pirates')) // If successful, do something with the response. 
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
            .then(res=>{if(password === user.password) {
                navigate('/pirates')
              } else {
                setErrors(["username or password does not match"])
              }
            })
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
                          {errors.map((err, index) => <div key={index}>{<p>{err}</p>}</div>)}

            <p>
                <label>Email</label><br/>
                <input type="text" onChange={(e) => onChangeEmail(e)}/>
            </p>
            <p>
                <label>Password</label><br/>
                <input type="password" onChange={(e) => onChangePassword(e)} />
            </p>         
            <button onClick={onSubmitHandler} >Submit</button>

        </>
    )
    }