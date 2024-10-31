'use client'

import axios from 'axios';
import { useState } from 'react';

export function useGpt() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('');
  // const prompt = "Your prompt goes here"; // Your existing prompt in string format

  const callChatGPTAPI = async (prompt: string) => {
    setLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY; // Store your API key securely in env variable
      const apiUrl = 'https://api.openai.com/v1/chat/completions';
      
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      };

      const data = {
        model: 'gpt-3.5-turbo', // specify the model here
        messages: [{ role: 'user', content: prompt }],
      };

      const response = await axios.post(apiUrl, data, { headers });
      setResponse(response.data.choices[0].message.content);

    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('Error details:', error.response);
      } else {
        console.error('Unexpected error:', error);
      }
      setResponse('There was an error processing your request.');
    } finally {
      setLoading(false)
    }
  }

  return { callChatGPTAPI,response, error, loading }
}
