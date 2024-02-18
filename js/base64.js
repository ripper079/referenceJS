console.log("Example of base64 Encoding and decoding");

const stringToEncode = "Hello World";

console.log("Original data");
console.log(stringToEncode);
const base64EncodedString = btoa(stringToEncode);                   // encodes to SGVsbG8gV29ybGQ=
console.log(base64EncodedString);                                   // SGVsbG8gV29ybGQ=

const decodedString = atob(base64EncodedString);                    // decodes to Hello World
console.log(decodedString);                                         // Hello World
console.log();

//And now support for unicode
// Unicode string with non-BMP character (U+1F603 - "😃")
const unicodeString = "Hello, \uD83D\uDE03"; // 😃


console.log("Unicode strings");
// Encoding to Base64
const base64EncodedUnicodeString = btoa(encodeURIComponent(unicodeString));
console.log(base64EncodedUnicodeString);

// Decoding from Base64
const decodedUnicodeString = decodeURIComponent(atob(base64EncodedUnicodeString));
console.log(decodedUnicodeString);
