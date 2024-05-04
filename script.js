
// Define the arrays and generate a random message
const greetings = ['Hello', 'Hi', 'Hey', 'Greetings'];
const adjectives = ['amazing', 'wonderful', 'fantastic', 'incredible', 'awesome'];
const nouns = ['day', 'evening', 'morning', 'afternoon', 'week', 'weekend'];
const phrases = ['hope you are doing well', 'enyoy your day', 'have a good one', 'take care'];

// Get the button and the element to display the message
const button = document.querySelector('.new-message');
const quote = document.querySelector('.quote');
const name = document.querySelector('.name');

//Function to generate new message
function generateMessage(){
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
const randomPhrase= phrases[Math.floor(Math.random() * phrases.length)];
const message = `${randomGreeting}! Have an ${randomAdjective} ${randomNoun}. ${randomPhrase}!`;

// Upadate the quote and the name elements with the new message
quote.textContent = message;
name.textContent = 'Random Message Generator';
}

// Add an event listener to the button that will call the generateMessage function when clicked
button.addEventListener('click', generateMessage);

// Generate a message when the page loads
//generateMessage();





