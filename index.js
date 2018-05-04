function theBeatlesPlay(musicians, instruments) {
  var beatlesPhrases = []; var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"] ; var instruments = [" plays guitar"]
  for (var i = 0; i < musicians.length; i++) {
    beatlesPhrases.push(musicians[i] + instruments[i])
  }
  return beatlesPhrases
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function johnLennonFacts(facts) {
 var excitedFactsArray = [];
 var i = 0;
 while (i < facts.length) {
   excitedFactsArray.push(facts[i] + "!!!");
    i++;
  }
  return excitedFactsArray;
}


function iLoveTheBeatles(n) {
  var beatlesArray=[] ;
do {
  beatlesArray.push("I love the Beatles!"); n++}

while (n < 15); 
return beatlesArray
}

