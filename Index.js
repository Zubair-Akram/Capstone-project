import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("index", { content: null }); 
});


app.post("/get-joke", async (req, res) => {
  const language  = req.body.language;
  const format = req.body.format;

  try {
    const result = await axios.get(`https://v2.jokeapi.dev/joke/Any?lang=${language}&format=${format}`);
    let joke = result.data.type === "single" ? result.data.joke : `${result.data.setup} - ${result.data.delivery}`;
    res.render("index", { content: joke }); 
  } catch (error) {
    res.render("index", { content: "Failed to fetch joke." });
  }
});
app.post("/get-joke",async(req,res)=>{
  try {
    const result = await axios.get(`${API_URL}/Programming?lang=${language}&format=${format}`);
    let joke = result.data.type === "single" ? result.data.joke : `${result.data.setup} - ${result.data.delivery}`;
    res.render("index", { content: joke }); 
  } catch (error) {
    res.render("index", { content: "Failed to fetch joke." });
  }
});
app.post("/get-joke",async(req,res)=>{
  try {
    const result = await axios.get(`${API_URL}/Miscellaneous?lang=${language}&format=${format}`);
    let joke = result.data.type === "single" ? result.data.joke : `${result.data.setup} - ${result.data.delivery}`;
    res.render("index", { content: joke }); 
  } catch (error) {
    res.render("index", { content: "Failed to fetch joke." });
  }
});
app.post("/get-joke",async(req,res)=>{
  try {
    const result = await axios.get(`${API_URL}/Pun?lang=${language}&format=${format}`);
    let joke = result.data.type === "single" ? result.data.joke : `${result.data.setup} - ${result.data.delivery}`;
    res.render("index", { content: joke }); 
  } catch (error) {
    res.render("index", { content: "Failed to fetch joke." });
  }
});
app.post("/get-joke",async(req,res)=>{
  try {
    const result = await axios.get(`${API_URL}/Dark?lang=${language}&format=${format}`);
    let joke = result.data.type === "single" ? result.data.joke : `${result.data.setup} - ${result.data.delivery}`;
    res.render("index", { content: joke }); 
  } catch (error) {
    res.render("index", { content: "Failed to fetch joke." });
  }
});
app.post("/get-joke",async(req,res)=>{
  try {
    const result = await axios.get(`${API_URL}/Spooky?lang=${language}&format=${format}`);
    let joke = result.data.type === "single" ? result.data.joke : `${result.data.setup} - ${result.data.delivery}`;
    res.render("index", { content: joke }); 
  } catch (error) {
    res.render("index", { content: "Failed to fetch joke." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
