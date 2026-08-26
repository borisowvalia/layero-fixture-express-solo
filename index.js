const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/hello", (_req, res) => res.json({ message: "привет от express" }));
app.get("/api/health", (_req, res) => res.json({ ok: true, port }));

app.listen(port, () => console.log(`слушаю ${port}`));
