/* Write a function countLetters that can return to us all the unique characters
that exist in a string that is passed into the function.
*******passing a string into the function

Furthermore, the function should also report back how many instances of each
letter were found in the string.
*******for loop that counts how many instances of each letter are found in the string

Functions can only return one thing.
That thing can be a primitive data type, like a number, a boolean, null or a string.

However, our function countLetters needs to return an object that can represent the stats for the sentence
it is given: all the characters found in the input string, and their respective counts.

our function needs to return an object that can represent the stats for the sentence, AND
1) all the characters found in the input string
2) how many times that letter is repeated in the sentence


 */

function countLetters (sentence) {
//var characters = "";
//var instances = 0;

  var characterCount = {};
  for (var i = 0; i < sentence.length; i++) {
  var character = sentence[i];
    if (characterCount[character]) {
      characterCount[character]++;
    } else {
      characterCount[character] = 1;
    }
  }
  return characterCount;

};

countLetters("lighthouse in the house");




/*
first, create an empty object
we want to iterate through each letter of the sentence parameter and access each letter, one at a time
lets say we have the letter h -- we have to look through the whole sentence and find out how many times its repeated
is there a function that can give me how many times a character can appear in a string? look for. a google answer
is there something that exists that counts the number of letters in a string?

we have an empty object

characterCount[letter] = 0; //if you put quotes it'll become a string, now it's a variable // give it a value so let it equal to 0
check if this letter is in your object, if its not in your object discard it, if it is, add one

*/