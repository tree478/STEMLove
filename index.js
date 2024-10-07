import express from "express"; 
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 7000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
});

app.get("/team", (req, res) => {
    res.sendFile(__dirname + "/public/team.html");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

