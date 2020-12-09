/*  Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l. The full path to the file to read will be provided as the first command-line argument. */

const fs = require('fs');
const fileToRead = process.argv[2];
//In terminal run path to file (node my-first-async-io.js my-first-async-io.js) 

if (fileToRead === '' || fileToRead === undefined) {
    console.log("Please provide the full path to a file to read");
    process.exit(1);
};

fs.readFile(fileToRead, 'utf8', (err, data) => {
    if (err) {
        console.log('Error', err);
    }
    var lines = data.split('\n').length -1;
    console.log(lines);
}) 
