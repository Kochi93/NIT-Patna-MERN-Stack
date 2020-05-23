var fs = require('fs');

var addNote = (title, body) => {
    var notes = loadNotes();
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('New note added!');
    }else {
        console.log('Note title is already taken!!');
    }
};

var saveNotes = (notes) => {
    var dataJSON = JSON.stringify(notes);
    fs.writeFileSync('json.json', dataJSON);

};

var removeNote = (title) =>  {
    var notes = loadNotes();
    var notesToKeep = notes.filter((note) => note.title !== title);
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log('Notes removed successfully.');
    } else {
        console.log('Note not found');
    }
}

var loadNotes = () => {
    try{
        var buf = fs.readFileSync('json.json');
        var dataJSON = buf.toString();
        return JSON.parse(dataJSON);

    } catch(e) {
        return [];
    }
};

var listNotes = () => {
    var notes = loadNotes();
    console.log('List of Notes being populated:');
    notes.forEach(note => {
        console.log(note.title);
    });
};

var readNote = (title) =>  {
    var notes = loadNotes();
    var note = notes.find((note) => note.title === title);

    if (note) {
        console.log('You are reading: ' + note.title);
        console.log(note.body);
    }
    else {
        console.log('Note not found');
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote : readNote
};
