/*MEDIUM: Create a node application that will read all of the planets in the solar system from a text file and print them to the console.
Text file: mercury, venus, earth, mars, jupiter, saturn ,uranus, neptune, pluto (I still believe in you pluto) 
 */

const fs = require('fs');
        // Synchronous
// const readMe = fs.readFileSync('planet.txt', 'utf8');
// console.log(readMe)

        //Asynchronous
fs.readFile('planet.txt', (err, data) => {
    if (err) {
        console.log ('Error', err);
    } 
    console.log('Planets in Solar System are:', data.toString())
})
