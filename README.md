# Recursive Transition Networks for Ornate Nouns and Fancy Nouns

I got this from Escher, Godel, Bach in the chapter about recursive structures and processes.

Just require index to use

```javascript
var say = require('./');
say.ornateNoun(); // A noun
say.fancyNoun(); // a fancy noun
```

Here's some random Ornate Nouns:

```
> say.ornateNoun();
'the handsome defiant tennis'
> say.ornateNoun();
'a/an sour touch'
> say.ornateNoun();
'teeny-tiny corn'
> say.ornateNoun();
'stale pail'
> say.ornateNoun();
'a/an helpful beautiful low homely wide-eyed rapid creepy rapid pea'
```

Here's a notable Fancy Noun it generated:

```
the cool dead philosophy following lipstick which flow the viola
```

But in reality, the fancy nouns need some work. There's no logic that detects any sort of context at all, so most of the fancy nouns don't make any sense. The regular nouns are all quite comical.
