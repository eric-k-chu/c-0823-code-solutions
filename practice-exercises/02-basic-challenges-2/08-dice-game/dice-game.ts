export type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
export type Simulation = {
  dice1: DiceRoll;
  dice2: DiceRoll;
  sum: number;
  result: 'win' | 'lose' | 'roll again';
};

export function diceGameSimulation(numSimulations: number): Simulation[] {
  const results: Simulation[] = [];

  for (let i = 0; i < numSimulations; i++) {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;
    let result: Simulation['result'];

    if (sum === 7 || sum === 11) {
      result = 'win';
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = 'lose';
    } else {
      result = 'roll again';
    }

    results.push({
      dice1,
      dice2,
      sum,
      result,
    } as Simulation);
  }
  return results;
}
