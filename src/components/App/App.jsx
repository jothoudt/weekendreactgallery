import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {

  let [galleryList, setGalleryList]=useState([]);

  //load galleryList on page load
  useEffect(() => {
    console.log('in useEffect')
    getImages();
  },[]);//end useEffect

  //get call to load galleryList
  const getImages=()=>{
    Axios.get('/gallery').then((response)=>{
      console.log('back from GET', response.data);
      setGalleryList(response.data)
    })//end then
    .catch((err)=>{
      console.log(err);
      alert('err');
    })//emd catch
  }//end getImages

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <body>
        <div>
          {/* move gallerylist as a prop to component */}
          <GalleryList galleryList={galleryList} display={getImages}/>
        </div>
        </body>
      </div>
    );//end return
}//end APP

export default App;
