import  express from "express";
import cors from 'cors';
import empRouter from './Routers/employee.router.js';




const app = express();

const PORT = 4000;
app.use(cors())
app.use(express.json())
app.use('/api/emp',empRouter)



app.listen(PORT, () => {
    console.log("My app is listening with port",PORT);
});
