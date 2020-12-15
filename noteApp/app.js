const validator = require('validator')
const chalk = require("chalk")
const yargs = require('yargs')
// const fs = require('fs')
const util = require('./note.js')
const  log = console.log

yargs.command({
    command:'add',
    describe:"Add new note",
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body:{
            describe: 'Describes body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        util.addNote(argv.title,argv.body)
        
    }
})

yargs.parse()
