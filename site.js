let num = ["apple", "orange", "pine Apple", "Banana"];

// for (let fruite of num) {
//     console.log(fruite);
// }

// for (let f = 0; f < num.length; f++) {
//     console.log(num[f]);
// }

// num.forEach((x) => {
//     console.log(x);
// });

let t = (x) => {
    console.log(`sq ${x} : ${x*x}`);
}

let y = t;

function high(n,c) {
    c(n);
}

high(6,y);
