const exp = require("express")
const app = exp();
const path = require("path");

app.use(exp.static(path.join(__dirname, './dist/MEAN-Latest/')))





app.listen(3000, () => { console.log("server on port 3000") })