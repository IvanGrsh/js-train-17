const regexp = /(?<group1>.e)(?<group2>st)/gims;

// const regexp1 = RegExp("test", "g");
// console.log(regexp.ignoreCase);

// const result = regexp.exec("This is test and est");

// console.log(regexp.exec("This is test and est"));

// console.log(regexp.test("This is test and est"));

// console.log(regexp.source);

// regexp.lastIndex = 9;

// console.log(regexp.exec("This is test and est"));

// console.log(regexp.exec("This is test and est"));

// const test = "This is test and est";

// console.log(test.replaceAll(regexp, "###"));

// console.log(test.search(regexp));

const test = "This is test and est";
const result = test.matchAll(regexp);

console.log(result.next());
console.log(result.next());
