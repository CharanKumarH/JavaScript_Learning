class User {
  constructor(name, role, isAdmin, isLoggedIn) {
    this.name = name;
    this.role = role;
    this.isAdmin = isAdmin;
    this.isLoggedIn = isLoggedIn;
  }

  display() {
    console.log(
      `Name: ${this.name},\nRole: ${this.role},\nIs Admin: ${this.isAdmin},\nIs Logged In: ${this.isLoggedIn}`
    );
  }
}

const User1 = new User("charan", "software", false, true);
const User2 = new User("sai", "menter", false, true);
const User3 = new User("ram", "tester", true, false);

// console.log(User1, User2, User3);
User1.display();
User2.display();
User3.display();
