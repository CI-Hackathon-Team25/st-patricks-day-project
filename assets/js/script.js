// Fill an array with strings. We can add to this array without changing other code
let greetings = ["Tá áthas orm bualadh leat!", "Cén scéal?", "Conas atá tú?", "Dia duit!"];

// initialise the variable used to select a greeting
let greetingNumber = 0; 

function greet() {
    // Use the Math function to generate a random number between 0 and the greetings array length
    greetingNumber = Math.floor(Math.random() * greetings.length);

    // Target the H1 element on the page and update its text
    document.getElementById("greetText").innerHTML = greetings[greetingNumber];
};