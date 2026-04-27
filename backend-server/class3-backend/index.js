import express from "express"
import stdRoutes from './routes/stdRoutes.js'
import Sequelize from "sequelize"
const app = express()
const port = 3000
const route = express.Router();

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('std-db', 'root', '', {
  host: 'localhost',
  dialect: "mysql"
});


app.use('/v1', stdRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
