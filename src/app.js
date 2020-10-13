import express from 'express'
import pkg from '../package.json'
import morgan from 'morgan'
import cors from 'cors'
const app = express()

//settings
app.set('pkg', pkg)
app.set('port', process.env.PORT || 4000)

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

export default app