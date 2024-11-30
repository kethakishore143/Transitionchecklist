const express = require("express");
const checklistRoutes = require("./checklistRoutes");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", checklistRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
