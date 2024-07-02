// class User {
//   #id = 123;
//   changeId(id) {
//     this.#id = id;
//   }
// }

// const user = new User();
// user.changeId(456);
// console.log(user.id); // undefined

function Person(name) {
  let privateName = name; // private property

  this.getName = function () {
    return privateName;
  };
}

const person = new Person("John");
console.log(person.getName()); // John
console.log(person.privateName); // undefined

//
//
//
class ClassWithPrivateProperty {
  #privateProperty;

  constructor() {
    this.#privateProperty = "hello world";
  }

  publicMethod() {
    return this.#privateProperty;
  }
}

const instance = new ClassWithPrivateProperty();
console.log(instance.publicMethod()); // "hello world"
console.log(instance.#privateProperty); // error
