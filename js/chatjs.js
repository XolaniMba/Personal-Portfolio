// Chatbot functionality
document.addEventListener("DOMContentLoaded", function () {
  const chatbotToggler = document.querySelector(".chatbot-toggler");
  const closeBtn = document.querySelector(".close-btn");
  const chatbox = document.querySelector(".chatbox");
  const chatInput = document.querySelector(".chat-input textarea");
  const sendChatBtn = document.querySelector(".chat-input span");

  let userMessage = null;
  const inputInitHeight = chatInput.scrollHeight;

  // Customized responses for your portfolio
  const responses = {
    hello: "Hello! How can I assist you with Xolani's portfolio today?",
    hi: "Hi there! What would you like to know about Xolani's work?",
    about:
      "Xolani is a SAS ninja who specializes in data analysis. You can learn more in the ABOUT section!",
    contact: "You can reach Xolani at +27814366163 or xolanimbambo22@gmail.com",
    projects:
      "Xolani has worked on various projects. Check the PROJECTS section for details!",
    experience:
      "Xolani has valuable experience in data analysis. Visit the EXPERIENCE section to learn more.",
    certifications:
      "Xolani has earned several certifications. See the CERTIFICATIONS section for details.",
    skills:
      "Xolani's skills include data analysis, SAS programming, and more. Ask me about specific skills!",
    default:
      "I'm sorry, I didn't understand that. Could you ask about Xolani's skills, projects, experience, or certifications?",
  };

  // Toggle chatbot visibility
  const toggleChatbot = () => {
    document.body.classList.toggle("show-chatbot");
  };

  chatbotToggler.addEventListener("click", toggleChatbot);
  closeBtn.addEventListener("click", toggleChatbot);

  // Create a chat message element
  const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);

    let chatContent =
      className === "outgoing"
        ? `<p></p>`
        : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
  };

  // Process user input and generate response
  const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Clear the input textarea
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append user's message
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
      // Display "Thinking..." message
      const incomingChatLi = createChatLi("Thinking...", "incoming");
      chatbox.appendChild(incomingChatLi);
      chatbox.scrollTo(0, chatbox.scrollHeight);

      setTimeout(() => {
        incomingChatLi.remove();

        // Generate response
        let response = responses.default;
        const lowerCaseMessage = userMessage.toLowerCase();

        for (const key in responses) {
          if (lowerCaseMessage.includes(key)) {
            response = responses[key];
            break;
          }
        }

        // Append response
        chatbox.appendChild(createChatLi(response, "incoming"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 600);
    }, 300);
  };

  sendChatBtn.addEventListener("click", handleChat);

  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleChat();
    }
  });

  chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
  });
});
