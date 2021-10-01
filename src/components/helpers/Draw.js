import Cards from "../card_grid/Cards";

//draw random card from the deck...

export const drawCards = (numberOfCards) => {

  console.log('drawing cards now...');

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


//   function repeat(draw, numberOfCards) {
//     draw();
//     numberOfCards && --numberOfCards && repeat(draw, numberOfCards);
// }

//   repeat(draw, numberOfCards);

  Array.from({length: numberOfCards}, () => draw());

  //console.log(randomCardNumbers);

  //console.log(`number of cards: ${numberOfCards}`);

  return randomCardNumbers;

}
