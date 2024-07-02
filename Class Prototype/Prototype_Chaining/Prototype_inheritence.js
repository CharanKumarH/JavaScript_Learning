/**
 * Prototype::
 * what is prototype
 * prototype chaining
 * same method
 * valu of this
 * for in v/s object.keys
 */

const login_matching = {
  login: "asdfghj555523",
};

const admin2 = {
  isAdmin: true,

  __proto__: login_matching,
};

const user1 = {
  name: "charan",
  role: "software_engineer",
  address: {
    city: "Bengaluru",
  },
  __proto__: admin2, // inheritence admin
};

// protoytpe chaining

// calling admin property by user1
console.log(user1.isAdmin); //  true

// calling login property admin > login_matching
console.log(user1.login); //  true

console.log(user1.name);
