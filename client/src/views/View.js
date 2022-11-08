import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PiratesForm from '../components/PiratesForm';
import { useParams } from 'react-router-dom';

const View = (props) => {
    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const {id} = useParams();
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/pirate/' + id)
            .then(res=>{
                setPirates(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
console.log(pirates)
    return (
        <div style={{"width":"50%","marginLeft":"10%", "display":"flex", "flexDirection":"row"}}>
            <a href="/pirates">Back to crew roster</a>
            <div id='left'>
                <p>{pirates.name}</p>
                <img src={pirates.url} style={{"width":"50%"}}/>
                <p>{pirates.catchPhrase}</p>
            </div>
            <div style={{"marginTop":"5%","border":"1px solid black","width":"50%"}}id='right'>
                 <p style={{"padding":"5%"}}>Position:    {pirates.crewPosition}</p><br/>
                <p style={{"padding":"5%"}}>Treasures:   {pirates.numberOfChest}</p><br/>
                <p style={{"padding":"5%"}}>Peg Leg:     {pirates.hasPegLeg? "YES":"NO"}</p>
                <p style={{"padding":"5%"}}>Eye Patch:    {pirates.hasEyePatch? "YES":"NO"}</p><br/>
                <p style={{"padding":"5%"}}>Hook Hand:   {pirates.hasHookHand? "YES":"NO"}</p><br/>
            </div>
           </div>
    )
}
    
export default View;