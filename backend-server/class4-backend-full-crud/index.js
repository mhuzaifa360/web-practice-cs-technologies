import express from "express"
import stdRoutes from './routes/stdRoutes.js'
import database from "sequelize"
import {connectDB} from './config/database.js'
const app = express()
const port = 3000

app.use(express.json())

async function initializeApp() {
  const dbConnected = await connectDB();

  if (!dbConnected) {
    console.error("Failed to initialize database. Server not starting.");
    process.exit(1);
  }

  // Start server only after database is connected
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

app.use('/v1', stdRoutes)
app.use('/v1', currencyRoutes)
initializeApp();

