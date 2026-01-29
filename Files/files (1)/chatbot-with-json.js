// chatbot.js
// This version loads Q&A pairs from a separate JSON file

class PortfolioChatbot {
    constructor() {
        this.responses = [];
        this.isLoaded = false;
    }

    // Load Q&A data from JSON file
    async loadData() {
        try {
            const response = await fetch('chatbot-data.json');
            const data = await response.json();
            this.responses = data.responses;
            this.isLoaded = true;
            console.log(`Chatbot loaded with ${this.responses.length} Q&A pairs`);
        } catch (error) {
            console.error('Failed to load chatbot data:', error);
            // Fallback to default response
            this.responses = [{
                keywords: ['default'],
                response: "Sorry, I'm having trouble loading my responses. Please email marc@marclarouche.com directly."
            }];
        }
    }

    // Find best matching response
    findBestMatch(userQuestion) {
        userQuestion = userQuestion.toLowerCase().trim();
        
        let bestMatch = null;
        let bestScore = 0;

        for (let response of this.responses) {
            let score = 0;
            
            // Count matching keywords
            for (let keyword of response.keywords) {
                if (userQuestion.includes(keyword.toLowerCase())) {
                    score++;
                }
            }

            if (score > bestScore) {
                bestScore = score;
                bestMatch = response;
            }
        }

        // Return default/fallback if no match
        if (bestScore === 0) {
            const fallback = this.responses.find(r => r.category === 'fallback');
            return fallback ? fallback.response : "I'd be happy to discuss that! Please email me at marc@marclarouche.com.";
        }

        return bestMatch.response;
    }

    // Main function to get response
    async getResponse(userQuestion) {
        if (!this.isLoaded) {
            await this.loadData();
        }
        return this.findBestMatch(userQuestion);
    }
}

// Initialize chatbot
const chatbot = new PortfolioChatbot();

// Example: Connect to your chat UI
document.addEventListener('DOMContentLoaded', async () => {
    await chatbot.loadData();
    
    const sendButton = document.getElementById('chatbot-send');
    const inputField = document.getElementById('chatbot-input');
    const chatDisplay = document.getElementById('chatbot-messages');
    
    sendButton.addEventListener('click', async () => {
        const userQuestion = inputField.value.trim();
        
        if (userQuestion === '') return;
        
        // Display user's question
        appendMessage('user', userQuestion);
        
        // Get and display chatbot response
        const response = await chatbot.getResponse(userQuestion);
        appendMessage('bot', response);
        
        // Clear input
        inputField.value = '';
    });
    
    // Also send on Enter key
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});

// Helper function to display messages
function appendMessage(sender, text) {
    const chatDisplay = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'message user-message' : 'message bot-message';
    messageDiv.textContent = text;
    chatDisplay.appendChild(messageDiv);
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}
