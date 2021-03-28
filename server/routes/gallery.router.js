const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool= require('../modules/pool');
// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    let queryString=`UPDATE "gallery" SET likes= likes +1 WHERE "id"=$1;`
    pool.query(queryString,[req.params.id]).then((results)=>{
        res.sendStatus(200);
    }).catch((err)=>{
    res.sendStatus(500)
    })
    // const galleryId = req.params.id;
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    // res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let queryText=`SELECT * FROM "gallery" ORDER BY "id"; `;
    pool.query(queryText).then(result=>{
        res.send(result.rows);
    })
    .catch(error =>{
        console.log('error getting gallery', error);
        res.sendStatus(500)
    })
    
}); // END GET Route

module.exports = router;