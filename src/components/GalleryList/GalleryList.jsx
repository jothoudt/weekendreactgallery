import React from 'react'
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList(props){
    return(
        <>
        {/* call props from APP */}
        {props.galleryList.map((post, id)=>(<GalleryItem galleryItem={post} key={id} display={props.display}/>)) }
        </>
    )
}

export default GalleryList;