/**
 * static method
 * static properties
 *
 **/
console.log("-----------------sorting script-------------------\n ");
class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static getParent() {
    return new Parent("John", 10);
  }
}

const Parent1 = new Parent("e", 11);
const Parent2 = new Parent("d", 18);
const Parent3 = new Parent("c", 6);
const Parent4 = new Parent("b", 15);
const Parent5 = new Parent("a", 15);

let arr1 = [Parent1, Parent2, Parent3, Parent4, Parent5];

console.log("-----------------sorting using as age -------------------- ");

console.log(" \n   assending order--------------------");
const assending_order = [...arr1].sort((a, b) => a.age - b.age);
console.log(assending_order);

console.log("\n   dessending order--------------------");
console.log([...arr1].sort((a, b) => b.age - a.age));

console.log("-----------------sorting using as name--------------------");

console.log(" \n   assending order--------------------");
console.log(
  [...arr1].sort((a, b) => {
    // console.log(a, b);
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    else return 0;
  })
);

console.log("\n   dessending order--------------------");
console.log(
  [...arr1].sort((a, b) => {
    // console.log(a, b);
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    else return 0;
  })
);
