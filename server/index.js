const express = require ("express");
const cors = require('cors');

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get( '/', (req,res,next)=>{
    res.send('DiffieHellmanGroup')
});

app.use('./auth', authRoutes);

app.listen(PORT , ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});