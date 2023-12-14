
const { response } = require('express');




const usersGet = (req, res) => {
    const {q,s,optional="xd"} = req.query;
    res.status(201).json({
        ok: true,
        request: 'get -api controller',
        q,
        s,
        optional
    })
}


const usersPost = (req, res) => {
    const body=req.body;
    
    
    res.status(300).json({
        msg:'post api controller',
        body
    })
}



const usersDelete = (req, res) => {
    const body=req.body;
    res.status(500).json({
        ok: true,
        msg: (`object to eliminate:  `,body) 
    })
}

const usersPut = (req, res) => {
    const body=req.body;
    const id=req.params.id
    res.status(202).json({
        ok: true,
        request: 'put -api controller',body,
        id
    })
}

const usersPatch = (req, res) => {
    res.status(202).json({
        ok: true,
        request: 'patch -api controller'
    })
}





module.exports = { usersGet, usersPut, usersDelete, usersPost, usersPatch }