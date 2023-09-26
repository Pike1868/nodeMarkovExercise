# Node Markov

**Use an algorithm for generating realistic machine-made text from an original source text.**

## **Markov Machines**

A Markov Machine emits output of a “Markov Chain.”

A Markov Chain is a chain of possible outcomes, given a particular “state”.

For example, consider the phrase “the cat in the hat is in the hat”. We could build a table of each word in this phrase, along with the word that comes after that phrase:

| the | cat, hat, hat |
| --- | --- |
| cat | in |
| in | the, the |
| hat | is, null |
| is | in |

To emit realistic-but-random text, we could pick a starting word randomly (say, “in”). Then we would:

1. find all words that can come after that word
2. pick one of those next-words randomly
3. if we picked ***null*** , we’ve reached the end of the chain, so stop
4. otherwise, restart at step 1

For example, from that simple phrase, we could find:

- “in the cat in the hat”
- “in the hat is in the hat”
- “in the cat in the cat in the cat in the hat”

## **Step 0: Setup**

- Make a project, a Git repo, and a ***package.json***
- Add ***node_modules*** to your ***.gitignore***

## **Step 1: Implement the Markov Machine**

Markov machine:

Markov.js contains the start of an object-oriented Markov machine:

*markov.js*

```jsx
/** Textual markov chain generator */

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}
```

The ***constructor*** function given some input text, splits the input text on spaces and linebreak characters to make a list of words. Now write a function that builds a map of chains of *word* → *possible-next-words*.

You should be able to instantiate it like this:

```jsx
**let** mm = **new** MarkovMachine("the cat in the hat");
```

Then, whenever you want to get generated text from it:

```jsx
mm.makeText();

mm.makeText(numWords=50);
```

**Test this in the Node REPL before continuing!** We’ve given you some text files to play with; you can feed these (or parts of these) into your machine to make sure it works.


## **Step 2: Build the *makeText.js* Script**

Create a script, ***makeText.js***, that works like this:

```bash
$node makeText.js file eggs.txt
... generated text from file 'eggs.txt' ...

$node makeText.js url http://www.gutenberg.org/files/11/11-0.txt
... generated text from that URL ...

```