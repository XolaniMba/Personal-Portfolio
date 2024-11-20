// Predefined chatbot responses
const responses = {
    "hello": "Hi there! How can I assist you today?",
    "hi": "Hi there! How can I assist you today?",
    "projects": "Check out my latest projects:  My Data Manipulation and my Poerfolio project. You can view them in the Projects section of my website.",
    "skills": "I am skilled in HTML, CSS, JavaScript, SAS, SQL, Python, and Flutter. Let me know if you want to know more about any of these!",
    "contact": "You can find my contact information in the Contact section of my portfolio.",
    "fun fact": "I love coding at night and often find inspiration in quiet places!",
    "quote": "Believe you can and you're halfway there. - Xolani Mbambo",
    "default": "Hi, Having a tough time understanding you....?"
};


// Function to handle sending messages
function sendMessage() {
    const userInput = document.getElementById("user-input").value.toLowerCase().trim();
    const chatbotMessages = document.getElementById("chatbot-messages");

    // Display user message
    const userMessage = document.createElement("div");
    userMessage.textContent = "You: " + userInput;
    userMessage.style.color = "white";
    chatbotMessages.appendChild(userMessage);

    // Display chatbot response
    const botMessage = document.createElement("div");
    botMessage.textContent = "Smart Bot: " + (responses[userInput] || responses["default"]);
    botMessage.style.color = "white";
    chatbotMessages.appendChild(botMessage);

    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    document.getElementById("user-input").value = "";
}

// Function to handle 'Enter' key press for sending messages
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
