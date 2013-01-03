var
  articles = require('./articles')
, adjectives = require('./adjectives')
, nouns = require('./nouns')
;

module.exports.noun = function(){
  return nouns[parseInt(Math.random() * nouns.length)];
};

module.exports.adjective = function(){
  return adjectives[parseInt(Math.random() * adjectives.length)];
};

module.exports.article = function(){
  return articles[parseInt(Math.random() * articles.length)];
};