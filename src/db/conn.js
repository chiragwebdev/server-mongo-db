const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/demo",{
    // useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(()=>{
    console.log("yes connection");
}).catch((error)=>{
    console.log("no connection");
})



