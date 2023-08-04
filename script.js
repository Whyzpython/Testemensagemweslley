document.addEventListener("DOMContentLoaded", () => {
  const messageContainer = document.getElementById("message-container");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");

  sendButton.addEventListener("click", () => {
    const messageText = messageInput.value.trim();
    if (messageText !== "") {
      const messageElement = document.createElement("div");
      messageElement.textContent = messageText;
      messageContainer.appendChild(messageElement);
      messageInput.value = "";
    }
  });

  messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      sendButton.click();
    }
  });
});
