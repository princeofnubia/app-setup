const axios = require("axios");
const _ = require("lodash");
const $ = require("jquery");
const { add, substract } = require("./arithmetic");
// entry point

$("#evaluate").on("click", () => {
  const inputA = parseInt($("#inputa").val());
  const inputB = parseInt($("#inputb").val());
  const evaluate = $("#result");
  evaluate.append(_.sum([inputA, inputB]));
});
