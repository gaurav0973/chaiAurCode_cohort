import React, { useCallback, useEffect, useState } from "react";

function PasswordGeneraator() {
  
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  
  const passwordGenerator = useCallback(() => {
    let password = "";
    let possibleChoices = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed)
      possibleChoices += "0123456789";
    if (charAllowed) 
      possibleChoices += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * possibleChoices.length);
      password += possibleChoices.charAt(charIndex);
    }
    setPassword(password);
  }, [length, numberAllowed, charAllowed,setPassword]);


  useEffect(()=>{
    passwordGenerator()
  }, [passwordGenerator, length, numberAllowed, charAllowed])



  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col bg-gray-900 px-4">
      <div className="text-3xl font-bold mb-6 text-gray-200">Password Generator</div>

      <div className="space-y-6 text-gray-300 w-full max-w-md">
        <div className="flex items-center space-x-4">
          <input
            className="flex-1 border-2 border-gray-600 bg-gray-800 text-white px-4 py-2 rounded"
            type="text"
            value={password}
            readOnly
            placeholder="password..."
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <input
              type="range"
              min={6}
              max={24}
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full"
            />
            <label htmlFor="range" className="whitespace-nowrap">Length: {length}</label>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={()=>{
                setNumberAllowed((numberAllowed)=>!numberAllowed)
              }}
            />
            <label>Include Numbers</label>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={()=>{
                setCharAllowed(charAllowed => !charAllowed)
              }}
            />
            <label>Include Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGeneraator;
