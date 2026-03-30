'use client';

import { useState } from 'react';

export default function DynamicSkills() {
  const [skills, setSkills] = useState([]);
  const [input, setInput] = useState('');

  function addSkill() {
    const trimmed = input.trim();
    if (trimmed) {
      setSkills([...skills, trimmed]);
      setInput('');
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') addSkill();
  }

  return (
    <div className="add-skill-area">
      <h3>Add a New Skill</h3>
      <div className="add-skill-row">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter a skill (e.g. Python)"
        />
        <button onClick={addSkill}>Add</button>
      </div>
      {skills.length > 0 && (
        <ul className="clean-list dynamic-skills-list">
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
