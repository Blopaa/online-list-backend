import express from 'express'
import pkg from '../package.json'
import morgan from 'morgan'
import cors from 'cors'
const app = express()

//routes import
import listsRoutes from './routes/lists.routes'
import userRoutes from './routes/user.routes'

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

app.use("/api/lists", listsRoutes)
app.use("/api/users", userRoutes)

export default app