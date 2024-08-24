"use client";

import React, { useState } from 'react';
import Header from '@/components/header';

export default function TailwindPromptPage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await fetch(`/api/llm-res?prompt=${encodeURIComponent(prompt)}`);
      if (!res.ok) {
        throw new Error('Failed to fetch response');
      }
      const data = await res.json();
      setResponse(data.response);
      console.log("Response set in state:", data.response);
    } catch (err) {
      setError('An error occurred while fetching the response.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  console.log("Rendering with response:", response);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Header />
      <form onSubmit={handleSubmit} className="mb-8 mt-12">
        <div className="mb-4">
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
            Describe how you feel today?
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Feeling kind of down, I wanna eat something warm...."
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || !prompt}
          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isLoading || !prompt
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          }`}
        >
          {isLoading ? 'Loading...' : 'Get Response'}
        </button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {response && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Suggest food</h2>
          <p className="bg-gray-100 p-4 rounded-md whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
}