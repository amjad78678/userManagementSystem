const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/user_management_system')


//-----------------------------------------------------------------------------------------------------
const nocache=require('nocache')
const express=require('express')
const app = express()
const path=require('path')



app.use(nocache())
app.use(express.static(path.join(__dirname, 'public','styles')));
app.use(express.static(path.join(__dirname, 'public','images')));

//for user routes
const userRouter=require('./routes/userRoute')
app.use('/',userRouter)

//for Admin routes
const adminRouter=require('./routes/adminRoute')
app.use('/admin',adminRouter)




app.listen(8000,()=>{
  console.log('server is running at port: http://localhost:8000/')
  console.log('server is running at port: http://localhost:8000/admin')

})
