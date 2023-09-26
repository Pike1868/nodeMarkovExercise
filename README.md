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

*markov.js*