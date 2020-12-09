// Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to the console (stdout), similar to running cat file | wc -l. The full path to the file to read will be provided as the first command-line argument (i.e., process.argv[2]). You do not need to make your own test file.

const fs = require('fs');

if (process.argv.length < 3) {
    console.log("Please provide the full path to a file to read");
    process.exit(1);
}
const readMe = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
console.log(readMe)

