var yargs = require('yargs');
var work = require('./work.js');
yargs.command({
    command: 'add',
    describe : 'Add a new note',
    builder: {
        title: {
            describe : 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe : 'Note Body',
            demandOption: true,
            type: 'string'

        }

    },
    handler : (argv) => {
        //console.log('Running yargs command add');
        work.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe : 'Remove a note',
    builder: {
        title: {
            describe : 'Note title',
            demandOption : true,
            type: 'string'
        }
    },
    handler : (argv) => work.removeNote(argv.title)
});

yargs.command({
    command: 'list',
    describe : 'List all note',
    handler : () => work.listNotes()
    
});

yargs.command({
    command: 'read',
    describe : 'Read a note',
    handler : (argv) => work.readNote(argv.title)
});

yargs.parse();
