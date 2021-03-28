import Axios from 'axios';
import React, {useState} from 'react'
import './GalleryItem.css'

function GalleryItem(props){
    //setState
    const [showDescription, setShowDescription]=useState(false);
    //to display gallery depending on toggle
    let displayChange= ()=>{
        if(showDescription){
            return(<span>{props.galleryItem.description}</span>)
        }else{
            return(<img src={props.galleryItem.path}></img>)
        }
    }
    
    //toggle between photo and description
    let toggleShowDescription =()=>{
        setShowDescription(!showDescription);
    }
   
    //updaate number of likes
    let updateLikes=()=>{
        let id= props.galleryItem.id;
        let likes= props.galleryItem.likes;

        Axios.put('/gallery/like/' + id, likes).then(
            props.display
        ).catch((err)=>{
            console.log(err)
            alert(err);
        })
    };//end uodateLikes

    let deletePhoto=()=>{
        let id= props.galleryItem.id;
        Axios.delete('/gallery/' + id).then(
            props.display
        ).catch((err)=>{
            console.log(err);
            alert(err)
        })
    }

    return(
        <>
        <div className="post">
            <button onClick={deletePhoto}>Delete</button>
            <p onClick={toggleShowDescription}>
                {displayChange()}
            </p>
            <button onClick={updateLikes}><span>&#128077;</span></button>
            <p>Likes: {props.galleryItem.likes}</p>
        </div>
        </>
    )//end return
}//end GalleryItem

export default GalleryItem;