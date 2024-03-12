const express=require('express')
const app=express()
const tasks=require('./routes/tasks')
const connectDB=require('./DB/connect')
require('dotenv').config()
//middlewares
app.use(express.json())
app.use(express.static('./public'))


//routes
// app.get('/hello',(req,res)=>{
//     res.send('All Items')
// })

app.use('/api/v1/tasks',tasks)

//app.get('/api/v1/tasks') -- get all tasks
//app.post('/api/v1/task') -- create new task
//app.get('/api/v1/tasks/:id') -- get single tasks
//app.patch('/api/v1/tasks/:id') -- update task
//app.get('/api/v1/tasks/:id') -- delete task                                       

app.get
app.put
app.post
app.delete

const port=5000

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening at ${port}`))
    }
    catch{
        console.log(error);
    }
}
start()


