const knex = require("./knexFile");

knex.schema.hasTable('users').then(function(exists) {
    if (!exists) {
        return knex.schema.createTable('users', function(table) {
            table.increments('id').primary()
            table.string('fullname')
            table.string('username')
            table.string('email')
            table.string('address')
            table.string('password')
        });
    }else{
        console.log("Table already exists");
    }
});