/* exported titleCase */
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function isMinorWord(string) {
  switch (string) {
    case 'and':
    case 'or':
    case 'nor':
    case 'but':
    case 'a':
    case 'an':
    case 'the':
    case 'as':
    case 'at':
    case 'by':
    case 'for':
    case 'in':
    case 'of':
    case 'on':
    case 'per':
    case 'to':
      return true;
    default:
      return false;
  }
}

function titleCase(string) {
  const words = string.split(' ');

  // Handling 'JavaScript' is the first word case
  if (words[0].toLowerCase() === 'javascript') {
    words[0] = 'JavaScript';
  } else if (words[0].toLowerCase() === 'javascript:') {
    words[0] = 'JavaScript:';
  } else {
    words[0] = capitalize(words[0]);
  }

  for (let i = 1; i < words.length; i++) {
    // set word to lowercase to handle both capital and lower cases.
    const normalizedWord = words[i].toLowerCase();

    if (normalizedWord === 'javascript') {
      words[i] = 'JavaScript';
    } else if (normalizedWord === 'javascript:') {
      words[i] = 'JavaScript:';
    } else if (normalizedWord === 'api') {
      words[i] = 'API';
    } else if (words[i].includes('-')) {
      const hyphenWord = words[i].split('-');
      hyphenWord[0] = capitalize(hyphenWord[0]);
      hyphenWord[1] = capitalize(hyphenWord[1]);
      words[i] = hyphenWord.join('-');
    } else if (isMinorWord(normalizedWord)) {
      // Subtitle
      if (words[i - 1].includes(':')) {
        words[i] = capitalize(words[i]);
      } else {
        words[i] = normalizedWord;
      }
    } else {
      words[i] = capitalize(words[i]);
    }
  }
  return words.join(' ');
}
