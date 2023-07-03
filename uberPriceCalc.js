class UberPriceCalculator {
    constructor(distance, duration, surgeMultiplier) {
        this.distance = distance;
        this.duration = duration;
        this.surgeMultiplier = surgeMultiplier;
    }

    calculatePrice(baseFare, costPerMinute, costPerKilometer) {
        const surgePrice = baseFare * this.surgeMultiplier;
        const distanceCost = costPerKilometer * this.distance;
        const durationCost = costPerMinute * this.duration;
        const totalPrice = surgePrice + distanceCost + durationCost;
        return totalPrice;
    }
}

// Creating an UberPriceCalculator instance
const calculator = new UberPriceCalculator(7.5, 30, 1.5); // Distance: 7.5 kilometers, Duration: 30 minutes, Surge Multiplier: 1.5

// Calculating the price in Indian Rupees
const baseFareInRupees = 100; // Base fare
const costPerMinuteInRupees = 2; // Cost per minute
const costPerKilometerInRupees = 10; // Cost per kilometer
const totalPriceInRupees = calculator.calculatePrice(baseFareInRupees, costPerMinuteInRupees, costPerKilometerInRupees);

console.log(totalPriceInRupees); // Output: The total price of the Uber ride
