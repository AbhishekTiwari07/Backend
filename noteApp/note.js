const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return "hello"
}

const addNote = function(title,body){
    const load = loadNotes()
    const duplicateNotes = load.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        load.push({
            title: title,
            body: body,
        })
        saveNotes(load)
    }
    else{
        console.log("Title already exist!!!")
    }
}

const removeNote = function(title){
    const load = loadNotes()
    const foundData = load.filter(function(note){
        return note.title !== title
    })
    if(load.length === foundData.length)
        console.log(chalk.green.inverse("Note not found"))
    else
        console.log(chalk.red.inverse("Note Removed"))
    saveNotes(foundData)
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
    removeNote:removeNote,
}
