/*jshint esversion: 6 */

class Human {
  constructor(name) {
    this.name = name;
  }

  sayName(){
    return this.name;
  }
}

module.exports = Human; //to reveal contents of humans.js so other files like human.spec.js can read it.