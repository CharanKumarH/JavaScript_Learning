/**
 * Prototype::
 * what is prototype
 * prototype chaining
 * same method
 * valu of this
 * for in v/s object.keys
 */

const class_1 = {
  name: "class_1",
  age: 50,
  prop_1: "abc",
  message() {
    console.log(this.name);
    console.log(this.age);
  },
};
const class_2 = {
  name: "class_2",
  age: 49,
  prop_2: "abc",
  __proto__: class_1,
};
const class_3 = {
  name: "class_3",
  age: 48,
  prop_3: "abc",
  __proto__: class_2,
};

const class_4 = {
  name: "class_4",
  age: 47,
  prop_4: "abc",
  __proto__: class_3,
};

// console.log(class_4.message());

for (let key in class_4) {
  console.log(key);
}
