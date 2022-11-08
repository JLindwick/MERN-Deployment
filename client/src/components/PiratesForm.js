import React, { useState , useEffect} from 'react'
import axios from 'axios';
import {useParams,useNavigate,Link} from 'react-router-dom';

export default () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(""); 
    const [url, setUrl] = useState(""); 
    const [numberOfChest, setNumberOfChest] = useState(""); 
    const [catchPhrase, setCatchPhrase] = useState(""); 
    const [crewPosition, setCrewPosition] = useState(""); 
    const [hasPegLeg, setHasPegLeg] = useState(false); 
    const [hasEyePatch, setHasEyePatch] = useState(false); 
    const [hasHookHand, setHasHookHand] = useState(false); 
    const [hasCaptian,setHasCaptian] = useState(false);
    const navigate = useNavigate();
    const [errors,setErrors] = useState([])
    const [isValid,setIsValid] = useState(false);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        //make a post request to create a new person

        axios.post('http://localhost/pirate', {
            name,
            url,
            numberOfChest,
            catchPhrase,
            crewPosition,
            hasPegLeg,
            hasEyePatch,
            hasHookHand
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
            })
            .then(validateFormElement)
    }  
    useEffect(() => {
        // Update the document title using the browser API
        axios.get('http://localhost:8000/pirate')
        .then(res=> {
            for(var i = 0;i<res.data.length;i++) {
                if(res.data[i].crewPosition == "captian") {
                    setHasCaptian(true)
                }
            }
        })
      });
    const validateFormElement = () => {
        if(name.length>2 && name.length<17) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
        return isValid;
    }
    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeUrl = (e) => {
        setUrl(e.target.value)
    }
    const onChangeNumberOfChest = (e) => {
        setNumberOfChest(parseInt(e.target.value))
    }
    const onChangeCatchPhrase = (e) => {
        setCatchPhrase(e.target.value)
    }
    const onChangeCrewPosition = (e) => {
        setCrewPosition(e.target.value)
    }
    const onChangeHasPegLeg = (e) => {
        if(hasPegLeg == true){
            setHasPegLeg(false)
        } else if(hasPegLeg==false) {
            setHasPegLeg(true)
        }
    }
    const onChangeHasEyePatch = (e) => {
        if(hasEyePatch == true){
            setHasEyePatch(false)
        } else if(hasEyePatch==false) {
            setHasEyePatch(true)
        }    }
    const onChangeHasHookHand = (e) => {
        if(hasHookHand == true){
            setHasHookHand(false)
        } else if(hasHookHand==false) {
            setHasHookHand(true)
        }    }
    const home = e => {
        navigate('/pirates')
    }
console.log(hasCaptian)
    return (
        <>
             {errors.map((err, index) => <div key={index}>{<p>{err}</p>}</div>)}
             
             <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>onChangeName(e)} value={name}/>
            </p>
            <p>
                <label>Image URL</label><br/>
                <input type="text" onChange={(e)=>onChangeUrl(e)} value={url}/>
            </p>
            <p>
                <label>Number Of Chest</label><br/>
                <select onChange={onChangeNumberOfChest} name="numberOfChest" id="numberOfChest">
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </p>
            <p>
                <label>Catch Phrase</label><br/>
                <input type="text" onChange={(e)=>onChangeCatchPhrase(e)} value={catchPhrase}/>
            </p>
            <p>
            <label>Crew position:</label>
            
            <>
                <select onChange={onChangeCrewPosition} name="crewPosition" id="crewPosition">
                <option value="captian">Captian</option>
                <option value="firstMate">First Mate</option>
                <option value="quaterMaster">Quarter Master</option>
                <option value="boatswain">Boatswain</option>
                <option value="powderMonkey" selected>Powder Monkey</option>
                </select></>

            </p>
            <p>
                <label>Peg Leg</label><br/>
                <input type="checkbox" onChange={onChangeHasPegLeg} checked={hasPegLeg}/>
            </p>
            <p>
                <label>Eye Patch</label><br/>
                <input type="checkbox" onChange={onChangeHasEyePatch} checked={hasEyePatch}/>
            </p>
            <p>
                <label>Hook Hand</label><br/>
                <input type="checkbox" onChange={onChangeHasHookHand} checked={hasHookHand}/>
            </p>
            <button onClick={home}>Cancel</button>
            <button onClick={onSubmitHandler} >Submit</button>

        </>
    )
    }
