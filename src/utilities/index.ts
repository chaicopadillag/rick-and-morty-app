/**
 *
 * @param numbers {number[]}
 * @returns
 */
export const sum = (numbers: number[]) => {
  const sumNumbers = (callback: (resul: number) => void): void => {
    const result = numbers.reduce((accumulator, number) => {
      if (number > 20) {
        const evenNumber = number % 2 === 0;

        return evenNumber ? 20 + accumulator : number + accumulator;
      }

      return number + accumulator;
    }, 0);

    return callback(result);
  };

  return sumNumbers;
};

// resul: 43
// sum([1, 2, 20, 26])((result) => console.log(result));
