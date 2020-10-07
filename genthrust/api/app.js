const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sendGrid = require("@sendGrid/mail");

const app = express();

app.use(bodyParser.json());

app.use(cors);
