
class Person {
    constructor(firstname, lastname) {
    // We always have to "this.*****" the parameters of the constructor. (Or most of the time?)
       this.firstname = firstname;
       this.lastname = lastname;
        }
      // get transforms the function name() to a method. We create a method that we want to re-use later.
      // When we want to use it, we write *parent-name*.*get-name*. Ex: person.name
      get name(){
        return this.firstname + " " + this.lastname
      }

      set name(fullname) {
        const [firstname, lastname] = fullname.split(" ")
        this.firstname = firstname
        this.lastname = lastname
      }
    } 
     
    let person = new Person('Marius','Waseige')
    console.log(person)
 
    person.name = "Antoine Pirard";
  
    console.log(person.name)

