const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

//middleware
app.use(express.json());

app.use(express.urlencoded({extended:false}));

//routes
app.use("/",require("./routes/api/Dashboard"));

app.use("/products",require("./routes/api/Product"));

app.use("/logins",require("./routes/api/login"));

app.use("/users",require("./routes/api/User"));

app.use("/orders",require("./routes/api/Order"));

app.listen(PORT,() =>{
    console.log(`Server running on port:${PORT}`); 
});