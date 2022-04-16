const express = require("express");
const app = express();
const port = 8080;

const cors = require("cors");
const fetch = require("node-fetch");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({limit: '50mb'}));

app.get('/', async (req, res) => {
  let search_phrase = "when+was+the+constitution+of+the+united+states+written";
	let url = "https://en.wikipedia.org/wiki/Cricket_World_Cup";
	const result = await fetch(url);
	console.log(result);
	const response = await result.text();
	res.send(response);
});

try {
	app.listen(port, () => {
		console.log(`Running on [:${port}]`);
	});
} catch (e) {
	console.error(e);
}