'use client'

import React, { useEffect, useState } from 'react';

import axios from 'axios';
import ReactMarkdown from 'react-markdown';


function Coverletter() {
    const [resumeText, setResumeText] = useState('');
    const [jobDescriptionText, setJobDescriptionText] = useState('');
    const [userInput, setUserInput] = useState('');
    const [draftInput, setDraftInput] = useState('');

    const [output, setOutput] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

  
  const handleFileUpload = async (event) => {
   
  };

  const handleResumeText = (event) => {
    setResumeText(event.target.value);
  };

  const handleJobDescriptionText = (event) => {
    setJobDescriptionText(event.target.value);
  };

  const handleDraftText = (event) => {
    setDraftInput(event.target.value);
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

//   useEffect(() => {
//     console.log("output is :"+output);

//   },[output]);

  const handleOutput = async () => {
    if (!resumeText.trim() || !jobDescriptionText.trim()) {
        alert('Both resume text and job description text are required.');
        return;
      }
    setIsGenerating(true);
    try {
      const response = await axios.post('/api/generateCoverLetter', {
        resumeText, 
        jobDescriptionText, 
        userInput,
        draftInput
      });
  
      setOutput(response.data.coverLetter);

      console.log("response.data.coverLetter is "+ response.data.coverLetter);
    } catch (error) {

      console.error('Error:', error);
      setOutput('An error occurred while generating the cover letter.');
    } finally {
        setIsGenerating(false);
      }
  };

  return (
    <div className="w-full p-10">      
        <h1 className="text-3xl mb-4">Welcome to coverletter auto generating !</h1>
      <div className="mb-4">
        <h2 className="text-xl mb-2 font-bold text-2xl">Upload Resume *</h2>
        <p>Text (up to 1500 words):</p>
        <textarea       
          style={{height: '300px'}}       
          value={resumeText}
          className="p-2 border rounded w-full" 
          maxLength="10000" 
          onChange={handleResumeText}
          
        />
      </div>
      <div className="mb-4">
        <h2 className="text-xl mb-2 font-bold text-2xl">Upload Job Description *</h2>
        <p>Text (up to 1500 words):</p>
        <textarea 
            style={{height: '300px'}}       

            value={jobDescriptionText}
            className="p-2 border rounded w-full" 
            maxLength="10000" 
            onChange={handleJobDescriptionText}
        />
        </div>

      <div className="mb-6">
        <h2 className="text-xl mb-2 font-bold text-2xl">Any coverletter draft you want to provide?</h2>
        <p>Text (up to 1500 words):</p>
        <textarea 
            style={{height: '300px'}}       
            value={draftInput}
            className="p-2 border rounded w-full" 
            maxLength="10000" 
            onChange={handleDraftText}
        />

      </div>
      <div className="mb-6">
        <h2 className="text-xl mb-2 font-bold text-2xl">Any specific points or experiences wants to emphasize or include to make the coverletter better</h2>
        <textarea 
            style={{height: '200px'}}       
            value={userInput} 
            onChange={handleUserInput} 
            maxLength="5000" 
            className="p-2 border rounded w-full" />
      </div>
      <div>
        <h2 className="text-xl mb-2">Output</h2>
        <button 
            onClick={handleOutput} 
            className="p-2 border rounded bg-blue-500 text-white"
            disabled={isGenerating}
        >
            {isGenerating ? 'Generating ... please wait ...' : 'Generate Output'}
        </button>
        {/* <button onClick={handleOutput} className="p-2 border rounded bg-blue-500 text-white">Generate Output</button> */}
        <div 
          className="mt-4"
          style={{ 
            whiteSpace: 'pre-wrap',
            padding: '20px', 
            border: '1px solid #ddd', 
            borderRadius: '4px', 
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)' 
          }}
        >
          <ReactMarkdown>{output}</ReactMarkdown>

        </div>
      </div>
      
    </div>
  );
}

export default Coverletter;