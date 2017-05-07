const R = 0.04;

let BUY = parseFloat(process.argv[2]);
let RATE_1 = parseFloat(process.argv[3]);
let CHANGE = parseFloat(process.argv[4]);

let BTC =						BUY / RATE_1;

let RATE_2 = RATE_1 + CHANGE;

let REV = RATE_2 *	BUY / RATE_1;

// FEE_BUY	= BUY * R;
// FEE_SELL	= REV * R;

// FEE = (BUY + REV) * R;

// NET = REV * (1 - R) - BUY * (1 + R);

let NET = (RATE_2 * BUY / RATE_1) * (1 - R) - BUY * (1 + R);

console.log(NET);
