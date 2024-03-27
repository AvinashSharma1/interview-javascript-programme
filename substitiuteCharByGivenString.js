// Substitute character in given string
let stringValue = "I am a programmer";
let substitue = {
    m:"s",
    a:"e"
};
let output = "";
let characters = stringValue.split('');
output = characters.map((char) => {
    
    if(substitue.hasOwnProperty(char)){
        return substitue[char];
    }
    else{
        return char;
    }
});
output = output.join('');

console.log(output);
