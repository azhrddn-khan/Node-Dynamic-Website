const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/thapadynamic")
.then(()=>{
    console.log("connected to db");
}).catch((error)=>{
    console.log("not connected to db");
})
