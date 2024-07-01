/**
 * static method
 * static properties
 *
 */

class Children {
  static id = 1;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.id = Children.id++;
  }
  static SortByAge(a, b) {
    return a.age - b.age;
  }
  static SortByName(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }
}

const child1 = new Children("e", 11);
const child2 = new Children("d", 18);
const child3 = new Children("c", 6);
let child4 = new Children("b", 15);
let child5 = new Children("a", 15);
child4 = null;

let arr = [child1, child2, child3, child5];

console.log([...arr].sort(Children.SortByAge));
console.log([...arr].sort(Children.SortByName));
