const express = require("express");
// console.log(express)
const app = express();
let port = process.env.PORT || 3000;

const day = new Date();
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDay = day.getDay();
const now = day.toISOString();
app.get("/api", (req, res) => {
  const name = req.query.slack_name;
  const track = req.query.track;
  res.send({
    slack_name: name,
    current_day: currentDay,
    utc_time: now,
    track: track,
    github_file_url:
      "https://github.com/Kaodily/stage-one-backend/blob/main/index.js",
    github_repo_url: "https://github.com/Kaodily/stage-one-backend",
    status_code: 200,
  });
});

app.listen(port, () => {
  console.log("hi");
});
