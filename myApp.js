let express = require("express");
let app = express();
const { port } = require("./server.js");
app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word,
  });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
