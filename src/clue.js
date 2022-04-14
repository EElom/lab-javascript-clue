// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: ["Jacob", "Doctor", "Victor", "Kasandra", "Eleanor", "Jack"],

    lastName: ["Green", "Orchid", "Plum", "Scarlet", "Peacock", "Mustard"],

    occupation: [
      "Entrepreneur",
      "Scientist",
      "Designer",
      "Actor",
      "Socialité",
      "Retired Football  player"
    ],

    age: [45, 26, 22, 31, 36, 62],

    description: [
      "He has a lot of connections",
      "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
      "Billionaire video game designer",
      "She is an A-list movie star with a dark past",
      "She is from a wealthy family and uses her status and money to earn popularity",
      "He is a former football player who tries to get by on his former glory"
    ],

    image: [
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
      "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
      "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
      "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
      "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
      "https://static.independent.co.uk/s3fs-    public/thumbnails/image/2016/07/04/08/unspecified-3.jpg"
    ],

    color: ["green", "white", "purple", "red", "blue", "yellow"]
  }
];



// Rooms Array


const roomsArray = [
  {
    name: [
      "Dining Room",
      "Conservatory",
      "Kitchen",
      "Study",
      "Library",
      "Billiard Room",
      "Lounge",
      "Ballroom",
      "Hall",
      "Spa",
      "Living Room",
      "Observatory",
      "Theater",
      "Guest House",
      "Patio"
    ]
  }
];


// Weapons Array

const weaponsArray = [
  {
    name: [
      "rope",
      "knife",
      "candlestick",
      "dumbbell",
      "poison",
      "axe",
      "bat",
      "trophy",
      "pistol"
    ],
    weight: [10, 8, 2, 30, 2, 15, 13, 25, 20]
  }
];


// ITERATION 2

function selectRandom(arr) {
  let random = Math.floor(Math.random() * arr.length)
  return arr[random]
}

function pickMystery() {
  let randomSuspect = selectRandom(suspectsArray)
  let randomWeapon = SelectRandom(weaponsArray)
  let randomRoom = selectRandom(roomsArray)
  return {
    suspect: randomSuspect,
    weapon: randomWeapon,
    room: randomRoom, 
  }
}


// ITERATION 3

function revealMystery(envelope) {
  return '${envelope.suspect.firstName}${envelope.suspect.lastName} killed MediaRecorder. Boddy using the ${envelope.weapon.name}in ${envelope.room.name}!'
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
