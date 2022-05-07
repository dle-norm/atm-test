const atm = require('./atm');
// test
let rep = null;
console.log('Test 1: 1€');
console.log(atm.atm(1));
console.log('Good answer:');
console.log(rep);
rep = {
    'two': 3,
    'five': 0,
    'ten': 0
};
console.log('Test 2: 6€');
console.log(atm.atm(6));
console.log('Good answer:');
console.log(rep);
rep = {
    'two': 0,
    'five': 0,
    'ten': 1
};
console.log('Test 3: 10€');
console.log(atm.atm(10));
console.log('Good answer:');
console.log(rep);
rep = {
    'two': 1,
    'five': 1,
    'ten': 90071992
};
console.log('Test 4: 900719927€');
console.log(atm.atm(900719927));
console.log('Good answer:');
console.log(rep);
rep = null;
console.log('Test 5: test');
console.log(atm.atm('test'));
console.log('Good answer:');
console.log(rep);
rep = null;
console.log('Test 6: -1');
console.log(atm.atm(-1));
console.log('Good answer:');
console.log(rep);
rep = null;
console.log('Test 7: 9007199254740991€');
console.log(atm.atm(9007199254740991));
console.log('Good answer:');
console.log(rep);
