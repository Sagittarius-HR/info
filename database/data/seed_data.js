const lorem = require('lorem-ipsum');

const options = require('../lorem_options');
const dogBreeds = require('../dog_breeds.js');


// ex. randomInt(1,5) => generates 1-5 inclusive
let randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let breedTypes = ['Herding', 'Sporting', 'Non-Sporting', 'Working', 'Hounds', 'Terriers', 'Toy'];

let breedInfoArray = []

//will generate random numbers, categories or ipsum data depending on breed attribute
for (let i = 1; i <=100; i++) {

  let randomWeightMin = randomInt(5, 75);
  let randomWeightMax = randomWeightMin + randomInt(5, 50);

  let randomHeightMin = randomInt(6, 48);
  let randomHeightMax = randomHeightMin + randomInt(1, 12);

  //generate array of 0-2 ipsum otherNames of 1-2 words
  let numberOfOtherNames = randomInt(0,3);
  let otherNameList = [];
  for (let i = 0; i < numberOfOtherNames; i++) {
    otherNameList.push(lorem.loremIpsum({count:randomInt(1,2), units: 'words'}))
  }

  let otherNameString = otherNameList.join(', ')

  let numberOfConcerns = randomInt(1,8);
  let majorConcernsList = [];
  let minorConcernsList = [];
  for (let i = 0; i < numberOfConcerns; i++) {
    majorConcernsList.push(lorem.loremIpsum({count:randomInt(1,3), units: 'words'}));
    minorConcernsList.push(lorem.loremIpsum({count:randomInt(1,2), units: 'words'}))
  }
  let majorConcernsString = majorConcernsList.join(', ')
  let minorConcernsString = minorConcernsList.join(', ')

  let numberOfOccasionallySeen = randomInt(1,3);
  let occasionallySeenList = []
  for (let i = 0; i < numberOfOccasionallySeen; i++) {
    occasionallySeenList.push(lorem.loremIpsum({count:randomInt(1,2), units: 'words'}))
  }
  let occasionallySeenString = occasionallySeenList.join(', ')


  let numberOfSuggestedTests = randomInt(1,4);
  let suggestedTestsList = [];
  for (let i = 0; i < numberOfSuggestedTests; i++) {
    suggestedTestsList.push(lorem.loremIpsum({count:randomInt(1,2), units: 'words'}))
  }
  let suggestedTestsString = suggestedTestsList.join(', ')



  let tempInfoObj = {
    id: i,

    about: {
      breedName: dogBreeds.breeds[i + 1],
      availableForAdoption: randomInt(1, 500),
      imageUrl: `http://breedphotos.s3.us-east-2.amazonaws.com/photos/image${i}.jpg`,
      summary: lorem.loremIpsum(options.summary),
      otherNames: otherNameString
    },

    stats: {
      energyLevel: randomInt(1, 5),
      exerciseRequirements: randomInt(1, 5),
      playfullness: randomInt(1, 5),
      affectionLevel: randomInt(1, 5),
      friendlinessToDogs: randomInt(1, 5),
      friendlinessToOtherPets: randomInt(1, 5),
      friendlinessToStrangers: randomInt(1, 5),
      watchfullness: randomInt(1, 5),
      easeOfTraining: randomInt(1, 5),
      groomingRequirements: randomInt(1, 5),
      heatSensitivity: randomInt(1, 5),
      vocality: randomInt(1, 5)
    },

    specs : {
      type: breedTypes[randomInt(1, 7) - 1],
      weightMin: randomWeightMin,
      weightMax: randomWeightMax,
      heightMin: randomHeightMin,
      heightMax: randomHeightMax,
      family: lorem.loremIpsum(options.familyAndArea),
      areaOfOrigin: lorem.loremIpsum(options.familyAndArea),
      dateOfOrigin: `${randomInt(5, 19)}00s`,
      otherNames: otherNameString
    },

    //detailed info
    history: lorem.loremIpsum(options.history),
    temprament: lorem.loremIpsum(options.tempramentAndUpkeep),
    upkeep: lorem.loremIpsum(options.tempramentAndUpkeep),

    health : {
      majorConcerns: majorConcernsString,
      minorConcerns: minorConcernsString,
      occaisonallySeen: occasionallySeenString,
      suggestedTests: suggestedTestsString,
      lifeSpan: `${randomInt(8, 20)} years`,
      note: lorem.loremIpsum({count: 2, units: 'sentences'})
    },
    //disclaimer
    disclaimer: lorem.loremIpsum({count: 2, units: 'sentences'}),

  }

  breedInfoArray.push(tempInfoObj);
}

module.exports.breedInfoArray = breedInfoArray;
