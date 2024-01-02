type Car = {
  make: string;
  model: string;
  year: number;
  mileage: number;
};
type Mileage = {
  averageMileage: number;
  highestMileageCar: Car;
  lowestMileageCar: Car;
  totalMileage: number;
};

export function analyzeCarMileage(cars: Car[]): Mileage {
  const totalMileage = cars.reduce((acc, n) => acc + n.mileage, 0);
  const highestMileageCar = cars.sort((a, b) => b.mileage - a.mileage)[0];
  const lowestMileageCar = cars.sort((a, b) => a.mileage - b.mileage)[0];
  const averageMileage = totalMileage / cars.length;

  return {
    averageMileage,
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}
