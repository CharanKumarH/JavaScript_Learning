//  parents

class Laptop {
  // constructor
  constructor(ram, processer, gen) {
    this.ram = ram;
    this.processer = processer;
    this.gen = gen;
  }
  //  method
  dispalyMessage() {
    console.log(
      `laptop specification \nram: ${this.ram},\nprocesser: ${this.processer}\ngen${this.gen}`
    );
  }
}

//  child

class dell extends Laptop {
  constructor(ram, processer, gen, color) {
    super(ram, processer, gen);
    this.color = color;
  }
  dispalyMessage() {
    console.log(
      `laptop specification \nram: ${this.ram},\nprocesser: ${this.processer}\ngen: ${this.gen}\ncolor: ${this.color}`
    );
  }
}
//  object
let dell1 = new dell(8, "i5", "10th", "black");
dell1.dispalyMessage();

console.log(dell1);
