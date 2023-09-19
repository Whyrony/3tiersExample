import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1111",
  database: "webappdb",
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/members", (req, res) => {
  const q = "SELECT * FROM members";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/members", (req, res) => {
  const q = "INSERT INTO members(`name`, `student_number`, `photo_url`) VALUES (?)";

  const values = [
    req.body.name,
    req.body.student_number,
    req.body.photo_url,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/members/:id", (req, res) => {
  const memberId = req.params.id;
  const q = "DELETE FROM members WHERE id = ?";

  db.query(q, [memberId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/members/:id", (req, res) => {
  const memberId = req.params.id;
  const q = "UPDATE members SET `name`= ?, `student_number`= ?, `photo_url`= ? WHERE id = ?";

  const values = [
    req.body.name,
    req.body.student_number,
    req.body.photo_url,
  ];

  db.query(q, [...values, memberId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(4000, () => {
  console.log("Connected to backend.");
});
