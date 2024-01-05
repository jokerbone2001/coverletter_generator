'use client'

import React, { useState } from 'react';

function coverletter() {
  const [userInput, setUserInput] = useState('');
  const [output, setOutput] = useState('');

  const handleFileUpload = (event) => {
    // Handle file upload
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleOutput = () => {
    // Handle output based on uploaded files and user input
  };

  return (
    <div className="w-full p-10" style={{height:"100vh"}}>      
        <h1 className="text-3xl mb-4">Simple UI</h1>
      <div className="mb-4">
        <h2 className="text-xl mb-2">Upload Resume</h2>
        <input type="file" onChange={handleFileUpload} className="p-2 border rounded" />
      </div>
      <div className="mb-4">
        <h2 className="text-xl mb-2">Upload Job Description</h2>
        <input type="file" onChange={handleFileUpload} className="p-2 border rounded" />
      </div>
      <div className="mb-4">
        <h2 className="text-xl mb-2">User Input</h2>
        <textarea value={userInput} onChange={handleUserInput} className="p-2 border rounded w-full" />
      </div>
      <div>
        <h2 className="text-xl mb-2">Output</h2>
        <button onClick={handleOutput} className="p-2 border rounded bg-blue-500 text-white">Generate Output</button>
        <div className="mt-4">{output}</div>
      </div>
    </div>
  );
}

export default coverletter;