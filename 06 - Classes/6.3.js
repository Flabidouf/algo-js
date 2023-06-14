
class Animal {
    // What is in the parenthese is a parameter.
    // We define the constructor of the class(Animal) with parameters in it.
    // If we do not write any parameters in the constructor, we won't be able to call them later. Because they wouldn't be defined.

    constructor(name, greeting) {
    // "this" refers to the name of the class (this.name = Animal.name).
    // "this" is used to refer the class.

        this.name = name;
        this.greeting = greeting;
    }
    sayHello() {
        return `${this.greeting}! I'm ${this.name}!`;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name,"Miaou")
    }
}
// "super" refers to the constructor of the clss that's extended. It's literally the parent's constructor.
class Dog extends Animal {
    constructor(name) {
        super(name, "Woof");
    }
}
// What is in the parentheses here is an argument.
console.log(new Cat('Gaspardine').sayHello())
console.log(new Dog('Peggy').sayHello())


