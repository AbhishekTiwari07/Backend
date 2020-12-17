const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return "hello"
}

const addNote =(title,body)=>{
    const load = loadNotes()
    const duplicateNotes = load.find((note)=>note.title === title)

    if(!duplicateNotes){
        load.push({
            title: title,
            body: body,
        })
        saveNotes(load)
        console.log(chalk.green.inverse("Note Added"))
    }
    else{
        console.log(chalk.red.inverse("Title already exist!!!"))
    }
}

const removeNote = (title)=>{
    const load = loadNotes()
    const foundData = load.filter((note)=>note.title !== title)
    if(load.length === foundData.length)
        console.log(chalk.green.inverse("Note not found"))
    else
        console.log(chalk.red.inverse("Note Removed"))
    saveNotes(foundData)
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const listNote = ()=>{
    const load = loadNotes()
    if (load.length>0){
        console.log("Notes: ")
        load.forEach((note)=>{
            console.log(note.title)
        })
    }
    else{
        console.log("No notes found!!!")
    }
}

const readNote = (title) =>{
    const load = loadNotes()
    const findNote = load.find(note => note.title===title)
    if(findNote){
        console.log(chalk.green.bold(findNote.title))
        console.log(findNote.body)
    }
    else
        console.log(chalk.red.inverse("Not Found!!!"))
}

const loadNotes = ()=>{
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
    listNote:listNote,
    readNote: readNote,
}
