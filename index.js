var
  data = require('./data')
;

module.exports.ornateNoun = function(current){
  var steps = {
    begin: function(current){
      var possible = ['article', 'adjective', 'noun'];
      return steps[possible[parseInt(Math.random() * possible.length)]](current);
    }
  , article: function(current){
      var possible = ['adjective', 'noun'];
      current += (current.length > 0 ? " " : "") + data.article();
      return steps[possible[parseInt(Math.random() * possible.length)]](current);
    }
  , adjective: function(current){
      var possible = ['adjective', 'noun'];
      current += (current.length > 0 ? " " : "") + data.adjective();
      return steps[possible[parseInt(Math.random() * possible.length)]](current);
    }
  , noun: function(current){
      var possible = ['end'];
      current += (current.length > 0 ? " " : "") + data.noun();
      return steps[possible[parseInt(Math.random() * possible.length)]](current);
    }
  , end: function(current){
      return current;
    }
  };
  return steps.begin(current);
};

module.exports.fancyNoun = function(current){
  var steps = {
    begin: function(current){
      var possible = ['ornateNoun'];
      return steps[possible[parseInt(Math.random() * possible.length)]](current);
    }
  , ornateNoun: function(current){
      var possible = ['relativePronoun', 'preposition'];
      current += (current.length > 0 ? " " : "") + data.article();
      return steps[possible[parseInt(Math.random() * possible.length)]](current);
    }
  , end: function(current){
      return current;
    }
  };
  return steps.begin(current);
};