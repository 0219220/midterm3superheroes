//const { response } = require("express");
const express= require("express");
const app= express();
var sh= require("superheroes");
const ejs=require('ejs');
const url="https://superheroapi.com/api/";


const https= require("https");

app.use(express.urlencoded({extended:true}));
//app.engine('html', require('ejs'),ejs.renderFile);
//app.set('view engine', html);

app.use(express.static("public"));

app.get('/', (req, res)=>{
    res.sendFile("index.html");
    //res.send('hellou ndibeaworel');
});



/*
app.post("/", (req,res)=>{
    var cdisplayer=req.body.cdisplay;
     res.send("rfefrn"+ cdisplay);
})
*/

app.get("/id", (req, res)=>{
    res.sendFile("index.html");


https.get(url, (response)=>{
    console.log(response);
});
res.send(sh.id + "dwf");
});

app.post('/id', (req,res)=>{

})

app.get('/id:id', (req, res)=>{
    const superh=sh.find(c=> c.id === parseInt(req.params.id));
    if(!superh) res.status(404).send("That superhero doesn't seem to exist! Please try another.");// 404 not found
    res.send(superh);
});


app.listen(3000, ()=>{
    console.log("this is running at port 3000" )
});
