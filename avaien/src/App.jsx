import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const CaesarCipher = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [selectedOption, setSelectedOption] = useState('encrypt');
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleProcess = () => {
    const shift = selectedOption === 'encrypt' ? 3 : -3; // Adjust shift based on encryption or decryption
    const result = processText(inputText, shift);
    setOutputText(result);
  };
  const processText = (text, shift) => {
    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        if (char.match(/[A-Z]/)) {
          const code = char.charCodeAt(0);
          let shiftedCode = ((code - 65 + shift + 26) % 26) + 65;
          return String.fromCharCode(shiftedCode);
        } 
else {
          return char;
        }
      })
      .join('');
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
       <h1 className="text-4xl font-bold mb-6 text-center">Caesar Cipher</h1>
        <div className="mb-4">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="encrypt">Encrypt</option>
            <option value="decrypt">Decrypt</option>
          </select>
        </div>
        <button
          onClick={handleProcess}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded"
        >
          Process
        </button>
        <div className="mt-6">
          <p className="text-lg font-semibold">Output:</p>
          <p className="text-xl bg-gray-100 p-2 rounded">{outputText}</p>
       </div>
      </div>
    </div>
  );
};
export default CaesarCipher;
