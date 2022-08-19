//Assignment-JS-21:
//You have given a string and character. Write a function to check the string and find how many times this character occurs in this string.
//Example:
//str = “Clarusway”         char = “a”       ===> result = 2      as “a” occurs 2 times in Clarusway

let countLetters = (str, char) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === char) {
            count++;
        }
    }
    return count;
};

console.log(countLetters("Hello my name is Howard, how are you?.", "h"));
