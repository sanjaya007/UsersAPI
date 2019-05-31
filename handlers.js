const knex = require("./knexFile");

function getUsers(req,res){
    
    knex
    .select()
    .table('users')
    .then((data)=>{
        res.send(data);
    })
}

function insertUsers(req,res){
    var values = {
        fullname: req.query.fullname,
        username: req.query.username,
        email: req.query.email,
        address: req.query.address,
        password: req.query.password
    };
    knex('users')
    .insert(values)
    .then(
        ()=>{
            console.log("1 row inserted!")
            res.end("1 row inserted!")
        }
    )
}

function updateUsers(req,res){
    var updateValues = {
        fullname: req.query.fullname,
        username: req.query.username,
        email: req.query.email,
        address: req.query.address,
        password: req.query.password
    },
    id = req.query.id;

    knex('users')
    .where({ id: id })
    .update(updateValues)
    .then(
        ()=>{
            console.log("1 row updated!")
        }
    )
}

function deleteUsers(req,res){
    var id = req.query.id;
    knex('users')
    .where({ id: id })
    .del()
    .then(
        ()=>{
            console.log("1 row deleted!")
        }
    )
}

module.exports = {
    getUsers : getUsers,
    insertUsers : insertUsers,
    updateUsers : updateUsers,
    deleteUsers : deleteUsers,
};