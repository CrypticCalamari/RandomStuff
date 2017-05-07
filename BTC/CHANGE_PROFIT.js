
let R = parseFloat(process.argv[2]);
let RATE_1 = parseFloat(process.argv[3]);

let RATE_2 = (RATE_1 * (1 + R)) / (1 - R);

console.log(RATE_2);
