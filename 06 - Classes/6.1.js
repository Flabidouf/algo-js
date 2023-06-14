
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get fullInfo() {
        return this.name + " is " + this.age;
    }
}

let cat1 = new Cat ("Skitty", 9);
let cat2 = new Cat ("Pixel", 6);

console.log(cat1.fullInfo);
console.log(cat2.fullInfo);