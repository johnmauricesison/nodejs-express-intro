
const express = require('express');
const app = express();


const routes = require('./routers.js');
app.use(routes);

const cors = require('cors');
app.use(cors());

const port = 8000;

app.listen(port, () => console.log(`Listening on port ${port}!`));


// const server = http.createServer((req, res) => {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(dt.myDatetimeFunction());
//       res.end();
// }).listen(8000);

