const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task_manager'

MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error,client)=>{
    if(error)
        return console.log("Unable to connect to Database")
    
    console.log("Connected to Database")
    const db = client.db(databaseName)
    db.collection('users').insertOne({
        name : "Abhishek",
        age: 25,
        height:125,
    },(error,result)=>{
        if(error)
            return console.log(error)
        return console.log(result.ops)
    })
})