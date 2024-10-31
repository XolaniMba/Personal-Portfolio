// Predefined chatbot responses
const responses = {
    "hello": "Hi there! How can I assist you today?",
    "experience": "I have experience in cybersecurity and mainframe programming through the Absa COBOL program.",
    "CV": "You can download my CV by clicking on the See my CV' button in the About section.",
    "default": "Hi, How are you doing "
};

// Function to toggle chatbot visibility
function toggleChatbot() {
    const chatbotContainer = document.getElementById("chatbot-container");
    chatbotContainer.style.display = chatbotContainer.style.display === "none" ? "flex" : "none";
    
    
}

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
    botMessage.textContent = "Bot: " + (responses[userInput] || responses["default"]);
    
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