import express from 'express'

const app = express()

app.get('/', (req,res) => {
    res.json({
        message: "Hello World"
    })
}) 

app.listen(8000, () => {
  console.log('Server has started at http://localhost:8000')
})