var
  articles = require('./articles')
, adjectives = require('./adjectives')
, nouns = require('./nouns')
, verbs = require('./verbs')
, prepositions = require('./prepositions')
, relativePronouns = require('./relative-pronouns')
;

module.exports.verb = function(){
  return verbs[parseInt(Math.random() * verbs.length)];
};

module.exports.noun = function(){
  return nouns[parseInt(Math.random() * nouns.length)];
};

module.exports.adjective = function(){
  return adjectives[parseInt(Math.random() * adjectives.length)];
};

module.exports.article = function(){
  return articles[parseInt(Math.random() * articles.length)];
};

module.exports.preposition = function(){
  return prepositions[parseInt(Math.random() * prepositions.length)];
};

module.exports.relativePronoun = function(){
  return relativePronouns[parseInt(Math.random() * relativePronouns.length)];
};