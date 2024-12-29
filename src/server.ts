import express,{Request,Response} from 'express';
import path from 'path';
import methodOverride from "method-override";


const app=express();



app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// router
import todoRouter from './routes/todoRouter'
app.set('view engine','ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static('public'));

app.use('/',todoRouter)

app.listen(3000,()=>{
    console.log('Port is running on 3000')
})