const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/?readPreference=primary&directConnection=true&ssl=false&appName=MongoDB+Compass";
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}
module.exports = connectToMongo;