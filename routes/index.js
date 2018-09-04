const express = require('express');
const router = express.Router();

const weather = require('weather-js');


router.get('/hyderabad', (req,res)=>{
    res.render('index')
});

router.get('/api/hyderabad',(req,res)=>{
    weather.find({search: 'Hyderabad, Telangana', degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
       
        data = JSON.stringify(result, null, 2);

        // data = JSON.parse(result);
        res.send(data);
      });


})




module.exports = router;
