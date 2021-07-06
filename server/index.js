import express from 'express';
import bodyPareser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app=express()



app.use(bodyPareser.json({limit:"30mb",extended:true}))
app.use(bodyPareser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use('/posts',postRoutes)
const CONNECTION_URL="mongodb+srv://arafat:amiarafat12@cluster0.53ehv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT=process.env.PORT||5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
      .then(()=>app.listen(PORT,()=>console.log(`server running on port:${PORT}`)))
      .catch((error)=>console.log(error.message));
mongoose.set('useFindAndModify',false)

