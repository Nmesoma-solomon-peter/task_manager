import express ,{Request,Response,Application, application} from 'express';
import { middleware } from 'yargs';
import Tasks from './routes/tasks'
import {connectdb} from './db/connect'
require('dotenv').config();
import {notFound} from './middleware/not_found'
import {errorHandler} from './middleware/error_Handler'

const app : Application = express();
const PORT = process.env.port || 5000

// middleware
app.use(express.json())
app.use(express.static('public'))

// routes
app.use('/api/v1/tasks',Tasks);


app.use(notFound);
app.use(errorHandler)

const start = async ()=>{
    try {
        await connectdb(process.env.MONGODB_LOCAL! )
        app.listen(PORT,():void=>console.log(`app runing on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start();
