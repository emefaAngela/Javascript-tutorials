// let variable = "hello";
// let variable2 = 4;
// let variable3 = 3.4;

const { checkPrime, countLetters, } = require("./lib");

// let variable4 = {
//     name: "Emmanuel Baidoo",
//     age: 7
// }

// let variable5 = () => console.log("Print Varible 5")


// console.log(typeof variable5);
// console.log()


// const numbers = [];

// // from 2 to 10000


// console.log("Numbers before checking", numbers)

// for (let i = 2; i <= 1000; i++) {
//     if (checkPrime(i)) {
//         numbers.push(i);
//     }
// }


// console.log("Numbers after checking", numbers)


// const name = "Angela";

// const result = countLetters(name);

// console.log("The number of letters in " + name + " is " + result)


const data = require("./data.json");


const displayobj = (obj) => {
    const name = obj.first_name
    const lastname = obj.last_name
    const gen = obj.gender
    const mail = obj.email
    console.log(name[0] + lastname[0] + "-" + gen + "-" + mail)

}

const displayamount = (obj) => {
    const amnt = obj.amount
    console.log(amnt.trim[0])
}


for (let i = 0; i < data.length; i++) {
    const obj = data[i];
    displayamount(obj)
    //displayobj(obj)
}