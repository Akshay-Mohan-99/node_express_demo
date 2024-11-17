const express = require('express')
const app = express()

app.use(express.json())

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// let's code

const fruitData = [
    {
        id: '1',
        name: 'Apple'
    },
    {
        id: '2',
        name: 'Mango'
    },
    {
        id: '3',
        name: 'Orange'
    },
]

// get all fruits
app.get('/', function (req, res) {
    console.log('get all the Fruits')
    res.json(fruitData);
})

// get fruit by id
app.get('/:id', function (req, res) {
    console.log('get Fruit by id')
    const { id } = req.params;
    
    const dataToReturn = fruitData.find((data) => data.id === id);
    if(!dataToReturn){
        return res.send('Not found')
    }

    res.json(dataToReturn);
})

// update fruit by id
app.patch('/:id', function (req, res) {
    console.log('update Fruit by id')
    const { id } = req.params;
    const { name } = req.body;
    
    const dataToReturn = fruitData.find((data) => data.id === id);

    if(!dataToReturn){
        return res.send('Not found')
    }

    dataToReturn.name = name;
    res.json(dataToReturn);
})

// add new fruit by id
app.post('/', function (req, res) {
    console.log('add new Fruit')
    const { name } = req.body;
    
    const newId = fruitData.length + 1;
    fruitData.push({
        id: `${newId}`,
        name: name
    })
    res.json(fruitData);
})

// add new fruit by id
app.delete('/:id', function (req, res) {
    console.log('delete Fruit by id')
    const { id } = req.params;
    
    const dataToReturn = fruitData.filter((data) => data.id !== id);
    res.json(dataToReturn);
})

app.listen(3000, async () => {
    console.log(`App listening at http://localhost:${3000}`)
})