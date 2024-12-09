class Car {
  constructor(brand, color, consumption, tankSize) {
    this.brand = brand || "Trabant";
    this.color = color || "strandkorlatkék";
    this.consumption = consumption || 15;
    this.tankSize = tankSize || 25;
  }

  getMaxDistance() {
    // instance method -› példány metódus - csak a példányokon él
    return (this.tankSize / this.consumption) * 100;
  }
}

const car1 = new Car("Ford", "red", 8, 40); // instance (példány)
const car2 = new Car("Audi", "blue", 10, 45);
const car3 = new Car();

console.log(car1);
console.log(car1.getMaxDistance());

console.log(car2.getMaxDistance());

console.log(car3);

class CarFilters {
  static getCarsWithMinimumDistanceOf(cars, minDistance) {
    // static method -› statikus metódus - csak magán az osztályon él
    return cars.filter((car) => car.getMaxDistance() > minDistance);
  }

  static getCarsWithColor(cars, color) {
    return cars.filter((car) => car.color === color);
  }
}

console.log(CarFilters.getCarsWithMinimumDistanceOf([car1, car2, car3], 400));
console.log(CarFilters.getCarsWithColor([car1, car2, car3], "strandkorlatkék"));
