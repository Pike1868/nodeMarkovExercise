/** Command-line tool to generate Markov text. */
const { readFile } = require("fs");
const argv = process.argv;
const axios = require("axios");
const markov = require("./markov");
const { convert } = require("html-to-text");

// function to read file
const getFileText = (path, callback) => {
  readFile(path, "utf8", (err, text) => {
    if (err) {
      console.error(`Cannot read this file: ${path},\n error message: ${err}`);
      process.exit(1);
    } else {
      callback(text);
    }
  });
};

//function to request url
const getUrlText = (url, callback) => {
  axios
    .get(url)
    .then((resp) => {
      let html = resp.data;
      let plainText = convert(html);
      callback(plainText);
    })
    .catch((err) => {
      console.error(
        `There was an error fetching this url: ${url},\n error message: ${err.message}`
      );
      process.exit(1);
    });
};

function generateText(text) {
  let cleanedText = text.replace(/[^a-zA-Z\s]/g, " ").toLowerCase();

  let mm = new markov.MarkovMachine(cleanedText);
  console.log(mm.makeText((numWords = 50)));
}

if (argv[2] === "file") {
  getFileText(argv[3], generateText);
} else if (argv[2] === "url") {
  getUrlText(argv[3], generateText);
} else {
  console.error(
    `Invalid argument: ${argv[3]}. Use "file" or "url" followed by the path or URL.`
  );
}
