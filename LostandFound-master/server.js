const express = require('express');
const dbConfig = require('./backend/config/db')
const Found = require('./backend/Routes/FoundRoute')
const cors = require('cors')
const Lost = require('./backend/Routes/LostRoute')
const Feedback = require('./backend/Routes/FeedbackRoute')
const Contact = require('./backend/Routes/Contactroute')

dbConfig()
const app = express();

app.use(cors())
app.use(express.json())
app.get('/',(req,res) =>{
    res.send('<h1> Welcome to Node Server</h1>')
})

app.use(Found)
app.use(Lost)
app.use(Feedback)
app.use(Contact)


const PORT = 8080;
app.listen(PORT,()=>{
    console.log("Database Started at Localhost:"+PORT)
})
