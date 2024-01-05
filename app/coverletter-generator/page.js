'use client'

import React, { useState } from 'react';


function Coverletter() {
    const [resumeText, setResumeText] = useState('');
    const [jobDescriptionText, setJobDescriptionText] = useState('');
    const [userInput, setUserInput] = useState('');
    const [output, setOutput] = useState('');
  
  
  const handleFileUpload = async (event) => {
   
  };

  const handleResumeText = (event) => {
    setResumeText(event.target.value);
  };

  const handleJobDescriptionText = (event) => {
    setJobDescriptionText(event.target.value);
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleOutput = () => {
    console.log('Resume Text:', resumeText);
    console.log('Job Description Text:', jobDescriptionText);
    console.log('User Input:', userInput);
    // Handle output based on uploaded files and user input
  };

  return (
    <div className="w-full p-10" style={{height:"100vh"}}>      
        <h1 className="text-3xl mb-4">Simple UI</h1>
      <div className="mb-4">
        <h2 className="text-xl mb-2">Upload Resume (Only PDF)</h2>
        <p>Text (up to 1000 characters):</p>
        <textarea 
            value={resumeText}
            className="p-2 border rounded w-full" 
            maxLength="1000" 
            onChange={handleResumeText}
        />
      </div>
      <div className="mb-4">
        <h2 className="text-xl mb-2">Upload Job Description</h2>
        <p>Text (up to 1000 characters):</p>
        <textarea 
            value={jobDescriptionText}
            className="p-2 border rounded w-full" 
            maxLength="1000" 
            onChange={handleJobDescriptionText}
        />
        </div>
      <div className="mb-4">
        <h2 className="text-xl mb-2">Any specific points the user wants to emphasize or include</h2>
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

export default Coverletter;