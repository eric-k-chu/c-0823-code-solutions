console.log('Lodash is loaded:', typeof _ !== 'undefined');

function convertRankToPoints(string) {
  switch (string) {
    case 'Ace':
      return 11;
    case 'Jack':
    case 'Queen':
    case 'King':
      return 10;
    default:
      return Number(string);
  }
}

function convert(hand) {
  return convertRankToPoints(hand[0].rank) + convertRankToPoints(hand[1].rank);
}

function findMaxPlayer(playerArray, roundCount, deck, cardPerHand) {
  // dealing cards to players
  const dealtCards = _.chunk(deck, cardPerHand);
  let count = 0;
  for (const player in playerArray) {
    playerArray[player].hand = dealtCards[count];
    count++;
  }

  console.log('Round %d', roundCount);
  for (let i = 0; i < playerArray.length; i++) {
    console.log(
      playerArray[i].name,
      ' has ',
      convert(playerArray[i].hand),
      'points.'
    );
  }

  // finding player(s) with highest # of points
  let maxPlayer = playerArray[0];
  let newPlayerArray = [maxPlayer];
  for (let i = 1; i < playerArray.length; i++) {
    if (convert(maxPlayer.hand) < convert(playerArray[i].hand)) {
      newPlayerArray = [playerArray[i]];
      maxPlayer = playerArray[i];
    } else if (convert(maxPlayer.hand) === convert(playerArray[i].hand)) {
      newPlayerArray.push(playerArray[i]);
    }
  }
  return newPlayerArray;
}

function cardGame(contestants, cardPerHand) {
  console.log('Loading Card Game...');

  let players = [];

  for (const person of contestants) {
    players.push({ name: person, hand: null });
  }

  const deck = [];
  const ranks = [
    'Ace',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'Jack',
    'Queen',
    'King',
  ];
  const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 4; j++) {
      deck.push({ rank: ranks[i], suit: suits[j] });
    }
  }

  let roundCount = 1;
  players = findMaxPlayer(players, roundCount, _.shuffle(deck), cardPerHand);
  while (players.length > 1) {
    roundCount++;
    players = findMaxPlayer(players, roundCount, _.shuffle(deck), cardPerHand);
  }

  console.log(
    players[0].name,
    ' is the winner! They have won ',
    roundCount,
    'amount of times.'
  );
}

const playerNames = prompt(
  'Write the name of the players, with each name separated by a comma:'
);
const cardAmount = prompt('How many cards per hand?');
const contestants = playerNames.split(',');
const cardPerHand = Number(cardAmount);

cardGame(contestants, cardPerHand);
