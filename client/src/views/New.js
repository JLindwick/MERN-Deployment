import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PiratesForm from '../components/PiratesForm';

const Main = (props) => {
    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/pirate')
            .then(res=>{
                setPirates(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    return (
        <div style={{"marginLeft":"1%"}}>
            <h1>New Crew Member</h1>
            <a href="/pirates">Crew List</a>
            <h3>Add a new crew member</h3>
            <hr/>
            <div style={{"border":"1px solid black","width":"15%","padding":"1%"}}>
           <PiratesForm/>
           </div>
        </div>
    )
}
    
export default Main;