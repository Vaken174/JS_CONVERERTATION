let a = Math.floor(Math.random() * 100);
(a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);


// if...else
let result;
if ((a > 10 ? a : a * 2) > 5) {
    result = ((2 * a) + 1 > 4) ? 5 : ((a % 2 === 0) ? 6 : 7);
} else {
    result = (a < 3) ? 1 : 2 * (a - 2);
}

console.log("Результат if...else:", result);

// switch
switch (true) {
    case (a > 10 ? a : a * 2) > 5:
        result = ((2 * a) + 1 > 4) ? 5 : ((a % 2 === 0) ? 6 : 7);
        break;
    default:
        result = (a < 3) ? 1 : 2 * (a - 2);
        break;
}

console.log("Результат switch:", result);
