import shuffle from './shuffle';

const WORDS = [
  "aigle",
  "avion",
  "baleine",
  "ballon",
  "camion",
  "cheval",
  "chute",
  "cle",
  "elephant",
  "escalier",
  "fleur",
  "lion",
  "manteau",
  "marteau",
  "mouton",
  "palmier",
  "parachute",
  "parapluie",
  "pelle",
  "pizza",
  "poisson",
  "pomme",
  "requin",
  "tortue",
  "vache",
  "voiture",
];

export default {
  index: 0,
  words: shuffle(WORDS),
  first() { return this.words[this.index = 0] },
  next() { return this.words[this.index = (this.index + 1) % this.words.length] },
}