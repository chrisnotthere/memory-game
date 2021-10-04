export const drawCards = (numberOfCards) => {

  function* shuffle(array) {
    let i = array.length;

    while (i--) {
        yield array.splice(Math.floor(Math.random() * (i+1)), 1)[0];
    }
  }

  const ranNums = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);
  let randomCardNumbers = [];

  const draw = () => {
    randomCardNumbers.push(ranNums.next().value);
  }

  Array.from({length: numberOfCards}, () => draw());

  console.log(randomCardNumbers);
  return randomCardNumbers;
}
