const errorNumber = (n) => typeof n !== 'number' || isNaN(n) || n < 0;
const errorString = (value) => typeof value !== 'number' || isNaN(value);

export { errorNumber };
