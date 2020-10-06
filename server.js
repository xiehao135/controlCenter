const express = require('express')
const mongoose = require('mongoose')
const Light = require('./models/light')
const app = express()

app.get('/',(req,res)=>{
    mongoose.connect('mongodb+srv://dbUser:dbUserPassword@lightingsolution.xzdrm.mongodb.net/lightSystem?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})

    const allLight = Light

    var lightArray = allLight.find();
    var allLights = []
    lightArray.exec(function(err,lights){
        if(err)
            return console.log(err);
        lights.forEach(function(light){
            var elem = new Object();
            elem['id'] = light.id;
            elem['floor'] = light.floor;
            elem['area'] = light.area;
            elem['status'] = light.status;

            allLights.push(elem)
            console.log(allLights)
        });

        var html = ''
        for(var i=0 ; i< allLights.length; i++){
            html += '<p>' + 'Id:' + allLights[i].id +';' + 'Status:' +allLights[i].status + '</p>'
        }
        
        res.send(html)
    })
})

var port = process.env.PORT
app.listen(port||3000,function(){
    console.log("Server is running on "+port)
})