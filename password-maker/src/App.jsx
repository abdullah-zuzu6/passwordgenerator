
import React, { useState } from "react";
import "./PasswordGenerator.css";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);

  const generatePassword = () => {
    let characters = "";
    if (includeUpper) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLower) characters += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) characters += "0123456789";
    if (includeSpecial) characters += "!@#$%^&*()_+{}[]<>?/";

    if (!characters) {
      setPassword("Select at least one option");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="card">
      <div className="card-content">
        <h2>Password Generator</h2>
        <div className="password-container">
          <input type="text" value={password} readOnly className="input-box" />
          <button className="copy-btn" onClick={copyToClipboard}>Copy</button>
        </div>
        <label>Length: {length}</label>
        <input
          type="range"
          min="6"
          max="15"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="slider"
        />
        <div className="options">
          <label><input type="checkbox" checked={includeUpper} onChange={() => setIncludeUpper(!includeUpper)} /> Uppercase</label>
          <label><input type="checkbox" checked={includeLower} onChange={() => setIncludeLower(!includeLower)} /> Lowercase</label>
          <label><input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} /> Numbers</label>
          <label><input type="checkbox" checked={includeSpecial} onChange={() => setIncludeSpecial(!includeSpecial)} /> Special Characters</label>
        </div>
        <button className="generate-btn" onClick={generatePassword}>Generate Password</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;