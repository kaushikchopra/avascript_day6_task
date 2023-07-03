class Person {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    getAddress() {
        return this.address;
    }

    getAge() {
        return this.age;
    }

    setAge(newAge) {
        this.age = newAge;
    }
}

// Creating a Person instance
const person = new Person("Kaushik", "Chopra", 26, "123 Main St");

// Accessing properties and calling methods
console.log(person.getFullName()); // Output: John Doe
console.log(person.getAddress()); // Output: 123 Main St
console.log(person.getAge()); // Output: 26

person.setAge(30);
console.log(person.getAge()); // Output: 30
