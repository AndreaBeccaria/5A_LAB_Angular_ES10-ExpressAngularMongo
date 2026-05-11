"use strict";

const jwt = require("jsonwebtoken");
const fs = require("fs");

class TokenAdministration{
    constructor() {
        this.privateKey = fs.readFileSync("keys/private.key","UTF8");
        this.token="";
        this.payload={};
    }

    createToken(user){
        this.token = jwt.sign({
            "_id":user._id,
            "user":user.user,
            "exp": Math.floor(Date.now()/1000)+3600 //durata di un'ora
            },
            this.privateKey
        );
        console.log(`Token creato correttamente per l'utente ${user.user}`);
    }
}

module.exports = new  TokenAdministration();