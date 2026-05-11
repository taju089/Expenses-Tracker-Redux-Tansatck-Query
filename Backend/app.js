const dns = require('dns')
dns.setServers(['1.1.1.1', '8.8.8.8'])

const express = require("express");

const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");
const errorHandler = require('./middlewares/errorHandler');
const categoryRouter = require('./routes/categoryRoutes');
const transactionRouter = require('./routes/transactionRoutes');
const cors = require('cors')

mongoose
  .connect(
    "mongodb+srv://sktaju089_e-commerce:taju089@cluster0.ljs2bl9.mongodb.net/expenses?appName=Cluster0/",
  )
  .then(() => {
    return console.log("DB is connected successfully");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();
const corsOptions = {
  origin : ["http://localhost:5173"]
}
app.use(cors(corsOptions))
app.get('/', (req, res)=>{
    res.json({
        message : "The app is running"
    })
})
// ! Middlewares
app.use(express.json()) //? pass incoming json data
app.use('/', userRouter)
app.use('/', categoryRouter)
app.use('/', transactionRouter)

// ! Error Handler Middleware

app.use(errorHandler)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`The server is running in PORT ${PORT}`);
});
