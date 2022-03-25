const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const { DB_URI } = require("./configs/config");

const app = express();
let server = require("http").Server(app);

// Connecting to database
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));
//set mongoose's Promise equal to global Promise since mongoose's Promise version is depricated
mongoose.Promise = global.Promise;

//Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(
  "/public/profilephotos",
  express.static(__dirname + "/public/profilephotos")
);
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client/build')));

//Routes
const userRoutes = require("./routes/users");
app.use("/api/users", userRoutes);
const eventRoutes = require("./routes/events");
app.use("/api/events", eventRoutes);
const adminRoutes = require("./routes/admin");
app.use("/api/admin", adminRoutes);
const regRoutes = require("./routes/registration");
app.use("/api/registrations", regRoutes);
const galleryRoutes = require("./routes/gallery");
app.use("/api/gallery", galleryRoutes);
const teamRoutes = require("./routes/teams");
app.use("/api/team", teamRoutes);
const sponsorRoutes = require("./routes/sponsors");
app.use("/api/sponsors", sponsorRoutes);
const caRoutes = require("./routes/ca");
app.use("/api/ca", caRoutes);
const clientRoutes = require("./routes/client");
app.use("/", clientRoutes);

//Catch 404 errors and forward them to error handelers
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//Error handeler function
app.use((err, req, res, next) => {
  const error = err;
  const status = err.status || 500;
  //respond to clients
  res.status(status).send(error.message);
  //respond to ourselves
  console.error(err);
});

//Start the server
var port = process.env.PORT || 8080;
server.listen(port, function () {
  console.log("App is running on port " + port);
});
