const exp = require("express")
const app = exp();
const path = require("path");

app.use(exp.static(path.join(__dirname, './dist/MEAN-Latest/')))




const port=process.env.PORT||8080

app.listen(port, () => { console.log(`server on ${port}`) })