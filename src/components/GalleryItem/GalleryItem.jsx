import React from 'react'
import './GalleryItem.css'

function GalleryItem(props){
    return(
        <>
        <img src={props.galleryItem.path}></img>
        <><p key={props.galleryItem.id}>{props.galleryItem.description}{props.galleryItem.likes}</p></>
        </>
    )
}

export default GalleryItem;