const express = require('express')
const cors = require('cors')

class Server {


    constructor() {


        this.app = express();
        this.port = process.env.PORT;
        this.pathofroutes = '/api/users';

        //Middlewares 
        this.middlewares()


        this.routes();







    }

    middlewares() {
        //Public Carpet
        this.app.use(express.static('public'))
         //Cors
         this.app.use(cors())

        
         //readin and parse of body
         this.app.use(express.json());
       
       
       
    }

    routes() {

        this.app.use(this.pathofroutes, require('../routes/users'));
    }

    listenport() {
        this.app.listen(this.port, () => {
            return console.log('Running in port', this.port)
        })
    }



}




module.exports = Server