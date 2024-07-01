// /**
//  * static method
//  * static properties
//  *
//  */

// class Children {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   static getChildren() {
//     return new Children("John", 10);
//   }
// }

// const child1 = new Children("e", 11);
// const child2 = new Children("d", 18);
// const child3 = new Children("c", 6);
// const child4 = new Children("b", 15);
// const child5 = new Children("a", 15);

// let arr = [child1, child2, child3, child4, child5];

// // console.log(arr.sort((a, b) => a.age - b.age));
// // console.log(arr.sort((a, b) => b.age - a.age));

// // console.log(arr.sort((a, b) => a.name - b.name));
// console.log(
//   arr.sort((a, b) => {
//     console.log(a, b);
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }

//     return 0;
//   })
// );
