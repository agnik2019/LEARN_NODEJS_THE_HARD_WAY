const chalk = require('chalk');
const yargs = require('yargs')
const getNotes = require("./notes.js");
/*
const msg = getNotes();
console.log(msg);

const greenMsg = chalk.blue.inverse.bold("Success!")
console.log(greenMsg)

console.log(process.argv);
*/
//add , remove, read, list

// Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:"Note title",
            demandOption: true,
            type:'string'
        },
        body:{
            describe:"Note body",
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
        console.log('Title: '+argv.title)
        console.log('Body: '+argv.body)
    }
})

// create remove command
yargs.command({
    command:'remove',
    describe:"remove a note",
    handler: function(){
        console.log('Removing the note...')
    }
})

yargs.command({
    command:'list',
    describe:"listing out notes",
    handler: function(){
        console.log('listing out note...')
    }
})

yargs.command({
    command:'read',
    describe:"read a note",
    handler: function(){
        console.log('Reading the note...')
    }
})

yargs.parse()
//console.log(yargs.argv);
/*

const command = process.argv[2]

if(command === 'add'){
    console.log("Adding note!!");
} else if(command === 'remove'){
    console.log("Removing note!")
}

*/