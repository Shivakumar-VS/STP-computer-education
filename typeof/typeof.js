document.getElementById("demo").innerHTML = 
"'John' is " + typeof "John" + "<br><br>" +
"('John' + 'Doe') is " + typeof ("John" + "Doe") + "<br><br>" +
"3.14 is " + typeof 3.14 + "<br><br>" +
"33 is " + typeof 33 + "<br><br>" +
"(33 + 66) is " + typeof (33 + 66) + "<br><br>" +
"NaN is " + typeof NaN + "<br><br>" +
"true is " + typeof true + "<br><br>" +
"false is " + typeof false + "<br><br>" +
"1234n is " + typeof 1234n + "<br><br>" +
"Symbol() is " + typeof Symbol() + "<br><br>" +
"x is " + typeof x;


// 'John' is string

// ('John' + 'Doe') is string

// 3.14 is number

// 33 is number

// (33 + 66) is number

// NaN is number

// true is boolean

// false is boolean

// 1234n is bigint

// Symbol() is symbol

// x is undefined