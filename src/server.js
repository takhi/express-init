const express = require("express");
const cors = require("cors");

const pingRoute = require("./routes/pingRoute");

const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors({ maxAge: 86400 }));
app.use(express.json());
app.use("/v1/api", pingRoute())

app.listen(PORT, function(){ console.log(`Server running on port ${PORT}`) });

