var _ = require('underscore');

module.exports = tertiary;

// GEB page 510

function tertiary(enzyme) {
  var letters = {
    1: "G",
    2: "T",
    3: "C",
    4: "A",
    5: "G",
    6: "T",
    7: "C"
  };

  enzyme = _.chain(enzyme);

  // remove any trailing non pair
  if (enzyme.last().value().length !== 2) {
    enzyme = enzyme.initial();
  }

  // we can ignore the first and last pairs
  enzyme = enzyme.rest().initial();

  var direction = enzyme.map(function(pair){
    return directionOfBasePair(pair);
  }).reduce(function(memo, direction){
    return memo + direction;
  }, 0).value() % 4;

  return letters[direction + 4];
}

function directionOfBasePair(basePair) {
  switch (basePair) {
    // right
    case "AT":
    case "CG":
    case "GC":
    case "GG":
    case "TA":
      return 1;
    // left
    case "CT":
    case "GT":
    case "TC":
    case "TG":
    case "TT":
      return -1;
    default:
      return 0;
  }
}
