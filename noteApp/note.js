const fs = require('fs')

const getNotes = function(){
    return "hello"
}

const addNote = function(title,body){
    const load = loadNotes()
    load.push({
        title: title,
        body: body,
    })
    saveNotes(load)
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function(){
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
}
