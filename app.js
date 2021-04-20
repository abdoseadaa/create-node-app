const app = require('./config/config')
const PORT = process.env.PORT || 5000




app.use("/", require("./src/routes/home"))

// default error router

app.get('*', require("./src/controllers/root").error)






app.listen(PORT, () => console.log('> server is up and running on http://localhost:' + PORT))