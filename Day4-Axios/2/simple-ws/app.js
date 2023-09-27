const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()
const port = 4000


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const employeeData = [
    { id: 666, name: "John", age: 22 },
    { id: 667, name: "Jane", age: 25 },
    { id: 668, name: "Johnny", age: 24 },
    { id: 669, name: "Juan", age: 28 },
    { id: 676, name: "Jonah", age: 27 },
    { id: 686, name: "Jenny", age: 25 },
];


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/allEmployees', (req, res) => {
    res.send(employeeData);
})

app.post('/newEmployee', (req, res) => {
    const newEmp = req.body;
    console.log("POST::", newEmp);
    employeeData.push(newEmp);
    res.json({message: "New employee Added!"})
    
})




app.listen(port, () => {
    console.log(`SIMPLE WS @ http://localhost:${port}`)
})