// FOR OF LOOP..........array specific loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "HELLO WORLD" // strings
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);  
}

// MAPS 

const map = new Map()
map.set('IN', "India")
map.set('NW', "Newzealand")
map.set('Fr', "france")
console.log(map);

for (const key of map) {
    console.log/(key);
}
