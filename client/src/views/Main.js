import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PirateList from '../components/PirateListComponent';
import {useParams,useNavigate,Link} from 'react-router-dom';

const Main = (props) => {
    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors,setErrors] = useState([]);

    const removeFromDom = piretId => {
        setPirates(pirates.filter(pirate => pirate._id != piretId));
    }
    useEffect(()=>{
        axios.get('http://localhost:8000/pirate')
            .then(res=>{
                setPirates(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    return (
        <div style={{"marginLeft":"1%"}}>
            {errors.map((err, index) => <div key={index}>{<p>{err}</p>}</div>)}

            <h1>Pirate Crew</h1>
           <p><a href="/new">Add a crew member</a></p>
           <h3>Crew List</h3>
           <hr/>
           {loaded && <PirateList pirates={pirates} removeFromDom={removeFromDom}/>}
        </div>
    )
}
    
export default Main;