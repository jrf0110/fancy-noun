var
  data = require('./data')

, fancyNounMaxSize = 7
, fancyNounCurrentSize = 0
;

module.exports.ornateNoun = function(current){
  var steps = {
    begin: function(current){
      current = current || "";
      var possible = ['article', 'adjective', 'noun'];
      return steps[possible[parseInt(Math.random() * possible.length)]](current);
    }
  , article: function(current){
      current = current || "";
      var possible = ['adjective', 'noun'];
      current += (current.length > 0 ? " " : "") + data.article();
      return steps[possible[parseInt(Math.random() * possible.length)]](current);
    }
  , adjective: function(current){
      current = current || "";
      var possible = ['adjective', 'noun'];
      current += (current.length > 0 ? " " : "") + data.adjective();
      return steps[possible[parseInt(Math.random() * possible.length)]](current);
    }
  , noun: function(current){
      current = current || "";
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
      fancyNounCurrentSize++;
      current = current || "";
      var possible = ['ornateNoun'];
      return steps[possible[parseInt(Math.random() * possible.length)]](current);
    }
  , ornateNoun: function(current){
      fancyNounCurrentSize++;
      var possible = ['relativePronoun', 'preposition', 'end'];
      if (fancyNounCurrentSize >= fancyNounMaxSize) possible = ['end'];
      current = current || "";
      current += (current.length > 0 ? " " : "") + module.exports.ornateNoun();
      return steps[possible[parseInt(Math.random() * possible.length)]](current);
    }
  , fancyNounToEnd: function(current){
      fancyNounCurrentSize++;
      current = current || "";
      var possible = ['end'];
      current += (current.length > 0 ? " " : "") + steps.begin();
      return steps[possible[parseInt(Math.random() * possible.length)]](current);
    }
  , fancyNounToVerb: function(current){
      fancyNounCurrentSize++;
      current = current || "";
      var possible = ['verbToEnd'];
      current += (current.length > 0 ? " " : "") + steps.begin();
      return steps[possible[parseInt(Math.random() * possible.length)]](current);
    }
  , relativePronoun: function(current){
      fancyNounCurrentSize++;
      current = current || "";
      var possible = ['fancyNounToVerb', 'verbToFancyNoun'];
      current += (current.length > 0 ? " " : "") + data.relativePronoun();
      return steps[possible[parseInt(Math.random() * possible.length)]](current);
    }
  , preposition: function(current){
      fancyNounCurrentSize++;
      current = current || "";
      var possible = ['fancyNounToEnd'];
      current += (current.length > 0 ? " " : "") + data.preposition();
      return steps[possible[parseInt(Math.random() * possible.length)]](current);
    }
  , verbToEnd: function(current){
      fancyNounCurrentSize++;
      current = current || "";
      var possible = ['end'];
      current += (current.length > 0 ? " " : "") + data.verb();
      return steps[possible[parseInt(Math.random() * possible.length)]](current);
    }
  , verbToFancyNoun: function(current){
      fancyNounCurrentSize++;
      current = current || "";
      var possible = ['fancyNounToEnd'];
      current += (current.length > 0 ? " " : "") + data.verb();
      return steps[possible[parseInt(Math.random() * possible.length)]](current);
    }
  , end: function(current){
      fancyNounCurrentSize = 0;
      return current;
    }
  };
  return steps.begin(current);
};