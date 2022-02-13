const sqlite = require('sqlite3')
const bcrypt = require('bcrypt')

const db = new sqlite.Database('userData.db')


function createUser(username,password){
    db.run('INSERT INTO user(username,password) VALUES(?,?)',[username,password],(err)=>{
        if(err){console.error(err.message)}
        else{console.log('user created!')}
    })
    
}

function createTodo(todo,userId){
    db.run('INSERT INTO todo(todoName,userId) VALUES(?,?)',[todo,userId],
        (err)=>{
            if(err){console.error(err.message)}
            else{console.log('todo created!')}}

    )
}



