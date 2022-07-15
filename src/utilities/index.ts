export const sum = (numbers: number[]) => {
  const sumNumbers = (callback: (resul: number) => void): void => {
    const result = numbers.reduce((accumulator, value) => {
      if (value > 20) {
        const evenNumber = value % 2 === 0;

        return evenNumber ? 20 + accumulator : value + accumulator;
      }

      return value + accumulator;
    }, 0);

    return callback(result);
  };

  return sumNumbers;
};

sum([1, 2, 3])((result) => console.log(result));
