import React, {useState} from 'react';
import axios from 'axios';

function Form(props){
    const [tempURL, setTempURL]=useState('');
    const [tempDescription, setTempDescription]=useState('');

    let addPhoto=()=>{
        const newPhoto={
            path: tempURL,
            description: tempDescription,
            likes:0
        };//end object
        axios.post('/gallery', newPhoto).then(
            props.displayPost
        ).catch((err)=>{
            console.log(err);
            alert(err);
        })
    }

    let handleUrl=(event)=>{
        setTempURL(event.target.value);
    }

    let handleDescription=(event)=>{
        setTempDescription(event.target.value);
    }

    return(
        <>
        <input type="text" placeholder="Pic Url" onChange={handleUrl} value={tempURL}></input>
        <input type="text" placeholder="Description" onChange={handleDescription} value={tempDescription}></input>
        <button onClick={addPhoto}>Add Photo</button>
        </>
    )
}

export default Form;