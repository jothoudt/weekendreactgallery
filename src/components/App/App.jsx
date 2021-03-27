import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {

  let [galleryList, setGalleryList]=useState([]);

  useEffect(() => {
    console.log('in useEffect')
    getImages();
  },[]);

  const getImages=()=>{
    Axios.get('/gallery').then((response)=>{
      console.log('back from GET', response.data);
      setGalleryList(response.data)
    })
    .catch((err)=>{
      console.log(err);
      alert('err');
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <div>
          <GalleryList galleryList={galleryList} display={getImages}/>
          {/* <p>{galleryItem.description} {galleryItem.likes} </p> */}
        </div>
      </div>
    );
}

export default App;
