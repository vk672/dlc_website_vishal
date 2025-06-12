import React, { useState } from 'react';
import axios from 'axios';

export default function Chatbot() {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini',
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const botMsg = response.data.choices[0].message.content;
      setMessages((msgs) => [...msgs, { role: 'assistant', content: botMsg }]);
    } catch (error) {
      setMessages((msgs) => [...msgs, { role: 'assistant', content: 'Error: Could not get response.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white dark:bg-gray-800 rounded shadow space-y-4">
      <h2 className="text-2xl font-semibold">DigiBuddy - Your Digital Assistant</h2>
      <div className="h-64 overflow-y-auto border rounded p-3 bg-gray-50 dark:bg-gray-900">
        {messages.map((m, i) => (
          <div key={i} className={`mb-2 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
            <p
              className={`inline-block p-2 rounded ${
                m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white'
              }`}
            >
              {m.content}
            </p>
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow px-3 py-2 rounded border border-gray-300"
          placeholder="Ask DigiBuddy..."
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-blue-600 text-white px-4 rounded disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
