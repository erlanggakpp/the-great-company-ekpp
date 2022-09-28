const format = require("date-fns/format");

function formatToString(date) {
  return format(new Date(date), "yyyy-MM-dd");
}

// console.log(formatToString(new Date()));
module.exports = formatToString;
