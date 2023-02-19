function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

if (import.meta.vitest) {
  const { it, expect, test } = import.meta.vitest;
  test("anagrams function exists", () => {
    expect(typeof anagrams).toEqual("function");
  });

  test('"hello" is an anagram of "llohe"', () => {
    expect(anagrams("hello", "llohe")).toBeTruthy();
  });

  test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
    expect(anagrams("Whoa! Hi!", "Hi! Whoa!")).toBeTruthy();
  });

  test('"One One" is not an anagram of "Two two two"', () => {
    expect(anagrams("One One", "Two two two")).toBeFalsy();
  });

  test('"One one" is not an anagram of "One one c"', () => {
    expect(anagrams("One one", "One one c")).toBeFalsy();
  });

  test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
    expect(
      anagrams("A tree, a life, a bench", "A tree, a fence, a yard")
    ).toBeFalsy();
  });
}
