import React from 'react'

function GalleryItem(props){
    return(
        <>
        <><p key={props.galleryItem.id}>{props.galleryItem.path} {props.galleryItem.description}{props.galleryItem.likes}</p></>
        </>
    )
}

export default GalleryItem;