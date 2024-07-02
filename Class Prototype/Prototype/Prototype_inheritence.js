/**
 * Prototype::
 * what is prototype
 * prototype chaining
 * same method
 * valu of this
 * for in v/s object.keys
 */

const admin = {
  isAdmin: true,
};

const user = {
  name: "charan",
  role: "software_engineer",
  address: {
    city: "Bengaluru",
  },

  __proto__: admin,
};

console.log(user);
console.log(user.toString()); // protoytpe inheritence is
