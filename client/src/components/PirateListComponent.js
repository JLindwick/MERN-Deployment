import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useParams,useNavigate,Link} from 'react-router-dom';

const PirateList = (props) => {
    const { removeFromDom } = props;
    const navigate = useNavigate();
    const [hasPirates,setHasPirates] = useState(false);

    const style = {
        "border":"1px solid black",
        "width":"35%",
    }

    const deletePirate = (pirateId) => {
        axios.delete('http://127.0.0.1:8000/pirate/' + pirateId)
            .then(res => {
                removeFromDom(pirateId)
            })
            .catch(err => console.error(err));
    }
    const viewPirate = (pirateId) => {
        navigate('/pirate/' + pirateId )
    }
    const sortedPiratesList = props.pirates.sort(function (prev, next) {
        return prev.name.localeCompare( next.name );
    });
    useEffect(()=>{
        if(props.pirates.length>0) {
            setHasPirates(true)
        }
    });
    console.log(hasPirates)
    return (
        <div>
            {hasPirates? sortedPiratesList.map( (pirate, i) =>
                <div key={i}>
                <table style={style}>
                    <thead style={{"background":"darkgrey","color":"white"}}>
                        <tr >
                            <td >Pirate Name</td>
                            <td>Actions available</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td><p style={{"color":"blue"}}>{pirate.name}<img style={{"width":"20%"}} src={pirate.url}></img></p></td>
                            
                            <td>
                                <button onClick={(e)=>{viewPirate(pirate._id)}}>View Pirate</button>
                                <button onClick={(e)=>{deletePirate(pirate._id)}}>WALK THE PLANK</button>&nbsp;
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
                </div>
                
            ):<p>hi</p>}
        </div>
    )

}
export default PirateList;