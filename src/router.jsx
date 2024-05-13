import React, { useState } from 'react';

const Router = () => {
  const [first, setFirst] = useState("");

  const upperCase = () => {
    const upperCaseText = first.toUpperCase();
    setFirst(upperCaseText);
  };

  const lowerCase = () => {
    const lowerCaseText = first.toLowerCase()
    setFirst(lowerCaseText)
  }

  return (
    <>
      <div className="max-w-full mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Convert To Upper Case</h1>
        <textarea
          className="w-full h-32 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          placeholder="Enter text..."
        />
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={upperCase}
        >
          Convert to uppercase
        </button>

        <button
          className="mt-4 ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={lowerCase}
        >
          Convert to lowercase
        </button>
        {/* {first && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Result:</h2>
            <p className="mt-2">{first}</p>
          </div>
        )} */}
      </div>
      <div className="text-center mt-6">
        <div className="text-2xl font-semibold">Your Text Summary</div>
        <div className="mt-4">
          <p className="text-lg">Length of the sentence: {first.length}</p>
          <p className="text-lg">Number of words: {first.split(" ").length}</p>
          <p className="text-lg">Estimated reading time: {Math.ceil(0.008 * first.split(" ").length)} minutes</p>
        </div>
        <div className="mt-6">
          <div className="text-3xl font-semibold">Preview</div>
          <div className="mt-2">{first}</div>
        </div>
      </div>
    </>
  );
};

export default Router;
