import React from 'react'

function GalleryList(props){
    return(
        <>
        {props.galleryList.map((galleryItem => <><p key={galleryItem.id}>{galleryItem.path} {galleryItem.description}{galleryItem.likes}</p></>))}
        </>
    )
}

export default GalleryList;