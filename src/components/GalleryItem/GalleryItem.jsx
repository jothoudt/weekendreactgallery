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

    return(
        <>
        <div class="post">
        <p onClick={toggleShowDescription}>
        {displayChange()}
        </p>
        <p>Likes: {props.galleryItem.likes}</p>
        </div>
        </>
    )
}

export default GalleryItem;