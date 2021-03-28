import React, {useState} from 'react';
import axios from 'axios';

function Form(props){
    const [tempURL, setTempURL]=useState('');
    const [tempDescription, setTempDescription]=useState('');

    //function to add post
    let addPhoto=()=>{
        const newPhoto={
            path: tempURL,
            description: tempDescription,
            likes: 0
        };//end object
        if( newPhoto.path === '' || newPhoto.description ===''){
            alert('input required');
        }else{
        axios.post('/gallery', newPhoto).then(
            props.displayPost,
            setTempURL(''),
            setTempDescription('')
        ).catch((err)=>{
            console.log(err);
            alert(err);
        })
    }
    };

    //to handle URL Form
    let handleUrl=(event)=>{
        setTempURL(event.target.value);
    };//end handleUrl

    //to handle photo description
    let handleDescription=(event)=>{
        setTempDescription(event.target.value);
    };//end handleDescription

    return(
        <>
            <input type="text" placeholder="Pic Url" onChange={handleUrl} value={tempURL}></input>
            <input type="text" placeholder="Description" onChange={handleDescription} value={tempDescription}></input>
            <button onClick={addPhoto}>Add Photo</button>
        </>
    )
}

export default Form;