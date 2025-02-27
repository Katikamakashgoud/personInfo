import React, { useState } from "react";
import axios from "axios";

function SearchPage() {
    const [query, setQuery] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const API_KEY = "AIzaSyCRX-RJID7FxDY6R6QSxrLRxP03H9Qp3HM"; // Replace with your actual API key
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

    const handleSearch = async (event) => {
        event.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setError("");

        try {
            const response = await axios.post(
                API_URL,
                {
                    contents: [{ parts: [{ text: query }] }],
                },
                {
                    params: {
                        key: API_KEY,
                    },
                }
            );

            const reply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response found.";

            setChatHistory([...chatHistory, { question: query, answer: reply }]);
            setQuery("");
        } catch (err) {
            setError(err.response?.data?.error?.message || "Error fetching data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-container">
          <h1>Chat Box</h1>

            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Ask me anything..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button" disabled={loading}>
                    {loading ? "Loading..." : "Send"}
                </button>
            </form>

            {error && <p className="error">{error}</p>}

            <div className="chat-history">
                {chatHistory.map((chat, index) => (
                    <div key={index} className="chat-message">
                        <p><strong>You:</strong> {chat.question}</p>
                        <p><strong>AI:</strong> {chat.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchPage;