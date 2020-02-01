var text = "hello235738154aaa789031678tt225";

var x = text.replace(/([0-9]{6})([0-9]{3})/g, '$1###');

console.log(text);
console.log(x);