import express from 'express'
import { Person } from './person.js'

const app = express()
const router =  express.Router()
const port = ++process.env.PORT || 4000

app.use(
    express.json(),
    router
)
router.get('^/$|class', (req, res) =>{
    res.json({
        status: res.statusCode,
        msg: "You are home."
    })
})
router.get('/person1', (req, res) => {
    let person1 = new Person()
    person1.firstName = "Shawn"
    person1.lastName = "Mendes"
    person1.age = 29
    person1.display()
    res.end('Please check the console')
})
router.get(/person2/, (req, res) => {
    let person2 = new Person()
    person2.firstName = "Layyah"
    person2.lastName = "Hartley"
    person2.age = 20
    person2.display()
    res.end('Please check the console')
})
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})