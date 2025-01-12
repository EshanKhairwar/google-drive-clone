const express = require("express");
const userRouter = require("./routes/user.routes");
const app = express();
const dotenv = require("dotenv");
const connectToDB = require("./config/db");
dotenv.config();
connectToDB();
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes/index.routes");

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);



app.use("/", indexRouter);
app.use("/user", userRouter);

process.on('uncaughtException',(err)=>{
  console.log("uncaught exception")
  console.log(err)
})

app.listen(3000, () => {
  console.log("listening on port 3000");
});
