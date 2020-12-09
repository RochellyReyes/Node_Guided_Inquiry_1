//down
var express = require('express')
//changing express to app to make it shorter 
var app = express()

//check if app is working. First parameter is a route and the second is a callback function
//Arrow function


// app.get('/employees', (req,res) => {
//     //always send like below or 
//     //res.send('Hello World')
//     //test in termindal node server. control c will stop the server. Go to browser and put in localhost:3000/employees 
//})

var data = require('./public/database.json')

app.get('/employees', (req,res) => {

    //control c and then write node server again to upload the server (Nodemon make it easier to upload the server)

    
    if(!data) {
        res.status(404).send('Could not find information')
    } //just in case could not find info
    res.send(data)

})


app.get('/employees/:id', (req,res) => {
    
    const findEmployee = data.employees.find(function(employee){
        //parseInt converting a string to an integer(number)
        //params /:id it is express
        return parseInt(req.params.id) === employee.id

    })





    if(!findEmployee) {
        res.status(404).send('Could not find information')
    } //just in case could not find info
    res.send(findEmployee)

    //command C and node server and then add a /# to see the individual assigned to that id. http://localhost:3000/employees/11

})


//make the server port first. Put your port at the bottom
//hieght number is 8080 to go for server. 
app .listen(3000)


//Tori comments:For those curious the difference between an endpoint and a route. An endpoint performs a specific function by taking one or more parameters and returning the resulting data. A route is the name you use to access the available endpoints. In layman's terms, the route is the URI, the endpoint is the action performed on the URI.