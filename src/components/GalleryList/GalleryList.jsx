import React from 'react'
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList(props){
    return(
        <>
        {props.galleryList.map((post, id)=>(<GalleryItem galleryItem={post} key={id} />)) }
        </>
    )
}

export default GalleryList;