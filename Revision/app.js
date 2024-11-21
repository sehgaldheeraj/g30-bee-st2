const express = require("express");
const app = express();
app.use(express.json());

app.use("/"); // args - route: string, callbackFn(s)
/*
 app.use()   -> Used as a middleware : Just pass a callback function as argument
 app.use('/', CB(s)) -> Used as a route: 
 app.get('/', CB(s))
 _______________________
 Routes: 
 _______________________
 Controllers: 
(req, res)=>{
    
}
 _______________________
 Middlewares:
 (req, res, next)=>{
    
}
 _______________________
 auth = () => {
        if(authenticated){
            next();
        }
        else{
            [client authorized nai hai]
        }
    }
 app.get('/products', auth , ()=>{
        [client ke liye data bhejo]
    }) 
*/

app.listen(4000, () => {
  console.log("Backend Process started on PORT:" + 4000);
});
