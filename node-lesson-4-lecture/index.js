const _ = require("lodash");
const moment = require("moment");

const now = moment().format("YYYY-MM-DD HH:mm:ss");
console.log("Current date and time:", now);

const numbers = [1, 2, 3, 4, 5];
const shuffled = _.shuffle(numbers);

console.log("Original array:", numbers);
console.log("Shuffled array:", shuffled);
