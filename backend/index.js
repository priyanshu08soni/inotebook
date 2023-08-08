const connectToMongo=require('./db');
const express=require('express');
connectToMongo();
const app=express();
const port=5000;
//middleWare to use request.body to put a requent on json in thunder client.
//content type application json.
app.use(express.json())
//endpoints:app.get and other
//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.listen(port,()=>{
    console.log(`iNotebook backend listening at http://localhost:${port}`)
})
