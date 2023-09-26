const markov = require("./markov");

describe("Testing MarkovMachine", function () {
  test("makeChains method", function () {
    let mm = new markov.MarkovMachine("the cat in the hat");

    expect(mm.chains.get("the")).toEqual(["cat", "hat"]);
    expect(mm.chains.get("cat")).toEqual(["in"]);
    expect(mm.chains.get("in")).toEqual(["the"]);
  });

  test("makeText method", function () {
    let mm = new markov.MarkovMachine("the cat in the hat");

    expect(mm.makeText()).toEqual(expect.any(String));
  });
});
