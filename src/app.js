
const app = require("express")()

require("../src/db/conectition/conn")

let port = 3011
app.listen(port, () => {
    console.log(`Server is running at port no: ${port}`)
})

// echo  "# MySQL_Operations" >> README.md
// git init
// git add README.md
// git commit - m "first commit"
// git branch - M main
// git remote add origin https://github.com/Codergirlll/MySQL_Operations.git
// git push - u origin main

// git remote add origin https://github.com/Codergirlll/MySQL_Operations.git
// git branch - M main
// git push - u origin main