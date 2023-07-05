class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// Creating a Circle instance
const circle = new Circle(5); // Radius: 5

// Accessing properties and calling methods
console.log(circle.getRadius()); // Output: 5
console.log(circle.getArea()); // Output: 78.53981633974483
console.log(circle.getCircumference()); // Output: 31.41592653589793

circle.setRadius(10);
console.log(circle.getRadius()); // Output: 10
