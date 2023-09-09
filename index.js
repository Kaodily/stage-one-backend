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
const hours = day.getUTCHours();
const minutes = day.getUTCMinutes();
const seconds = day.getUTCSeconds();
const milliseconds = day.getUTCMilliseconds();
const data = {
  slack_name: "kaodilim",
  current_day: currentDay,
  utc_time: `${ hours}:${minutes}:${seconds}.${milliseconds}`,
  track: "backend",
//   github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
  github_repo_url: "https://github.com/Kaodily/stage-one-backend",
  status_code: 200,
};


app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log("hi");
});
