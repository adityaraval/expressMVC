//modules import
import express from 'express';

//other import
import Response from '../Response/Response';
import ResponseStructure from '../Config/response_code';

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/ok', function (req, res) {
  let data = Response.Ok(ResponseStructure.Ok.code,ResponseStructure.Ok.message,[],ResponseStructure.Ok.status_code);
  res.json(data);
})

app.get('/servererror', function (req, res) {
let data = Response.Ok(ResponseStructure.ServerError.code,ResponseStructure.ServerError.message,[],ResponseStructure.ServerError.status_code);
  res.json(data);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})