const axios = require("axios");
module.exports.TextEditor = async (req, res) => {
  console.log("callling text");

  var text = req.body.content;
  console.log("text", text);
  let resp = [];

  axios
    .get(
      `https://www.google.com/inputtools/request?ime=transliteration_en_te&num=5&cp=0&cs=0&ie=utf-8&oe=utf-8&app=jsapi&text='${text}'`
    )

    .then((response) => {
      console.log("Response:", response.data[1][0][1]);
      res.send(response.data[1][0][1]);
    })
    .catch((error) => {
      console.log("error call");
      console.error("Error:", error.message);
    });
};
