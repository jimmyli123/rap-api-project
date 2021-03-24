const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000;

app.use(cors());

let rappers = {
    'savage': { 
        'age': 28,
        'birthName': 'Bob',
        'birthLocation': 'London, England'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    },
    'Chance the Rapper': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }

}


// get takes in 2 values. 
// It takes in a request
// 
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')

})
app.get('/api/savage/:rapperName', (request, response) => {
    let rapName = request.params.rapperName;
    response.json(rappers[rapName])
})

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)

})
