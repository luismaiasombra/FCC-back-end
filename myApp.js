const http = require("http");
const hostname = "174.129.219.95";
const port = 3000;
const express = require("express");
const app = express();
/*


app.get('/:word/echo', (req, res) => {
  const word = req.params.word;
  res.json({ echo: word });
});

;*/
app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word,
  });
});
app.listen(port, () => {
  console.log(`Server running at ${hostname}:${port}`);
});

module.exports = { app };
