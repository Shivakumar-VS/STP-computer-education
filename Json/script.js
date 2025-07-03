let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;
// OUTPUT : Anna Smith
// The JSON.parse() method parses a string as JSON, optionally transforming the value produced by parsing.
// The JSON object contains methods for parsing and stringifying JSON.
// The JSON.parse() method parses a string as JSON, optionally transforming the value produced by parsing.
