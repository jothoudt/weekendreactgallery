import Axios from 'axios';
import React, {useState} from 'react'
import './GalleryItem.css'

function GalleryItem(props){
    const [showDescription, setShowDescription]=useState(false);

    let displayChange= ()=>{
        if(showDescription){
            return(<p>{props.galleryItem.description}</p>)
        }else{
            return(<img src={props.galleryItem.path}></img>)
        }
    }

    let toggleShowDescription =()=>{
        setShowDescription(!showDescription);
    }
   
    let updateLikes=()=>{
        let id= props.galleryItem.id;
        Axios.put('/gallery/like/' + id).then(
            props.display
        ).catch((err)=>{
            console.log(err)
            alert(err);
        })
    }

    return(
        <>
        <div class="post">
        <p onClick={toggleShowDescription}>
        {displayChange()}
        </p>
        <button onClick={updateLikes}><span>&#128077;</span></button>
        <p>Likes: {props.galleryItem.likes}</p>
        </div>
        </>
    )
}

export default GalleryItem;