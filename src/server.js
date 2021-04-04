'use strict';

const express = require('express');
const cors = require('cors');
//errorrs
const notFound= require('./middleware/404');
const serverError= require('./middleware/500');
//router
const userRouter= require('./auth/router');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/', userRouter );


app.use('*' , notFound);
app.use(serverError);

module.exports = {
    app: app,
    start : (port)=>{
        const PORT = port ;
        app.listen(PORT , ()=> console.log(`LISTENING ON PORT ${PORT}`));
    },
};