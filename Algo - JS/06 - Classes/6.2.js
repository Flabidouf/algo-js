
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHello() {
        console.log("Hello, " + this.firstname + this.lastname + " !");
    }
}

const marius = new Person("Marius ", "Waseige");
console.log(marius.sayHello());
