import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to render the main page
app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/yogaVideos`);
        console.log(response);
        res.render("index.ejs", { yogaVideos: response.data });
    } catch (error) {
        res.status(500).json({ message: "Error fetching videos" });
    }
});

//render a particular id video

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});  