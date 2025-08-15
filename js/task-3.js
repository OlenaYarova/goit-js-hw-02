function checkForSpam(message) {
   return message.toUpperCase().includes("SPAM") || message.toUpperCase().includes("SALE")
} 