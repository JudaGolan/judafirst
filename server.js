const express = require("express");
const app = express();
const port = process.env.PORT|| 4000;

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.send('Hello World!456456456')
  })

  app.get("/bla", (req, res) => {
    res.send('blablabla 6')
  })

function multi(a,b){
    return a*b;
}

app.get('/multi', (req, res) => {
    res.send(`<h1>${multi(8,6)} </h1>`)
})



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  }); 
  