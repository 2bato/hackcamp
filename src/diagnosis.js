import React, { useState } from 'react';
import axios from 'axios';

function Diagnosis() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const conversation = [
        { role: 'system', content: 'Tell me whether I should stretch my elbow, knee, hip, neck, shoulder, wrists, or hands based on the symptoms I describe' },
        { role: 'user', content: text },
      ];

      const apiResponse = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: conversation,
        },
        {
          headers: {
            'Authorization': 'Bearer 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',
            'Content-Type': 'application/json',
          },
        }
      );

      if (apiResponse.data) {
        setResponse(apiResponse.data.choices[0].message.content);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your text:
          <textarea value={text} onChange={handleTextChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

      {response && (
        <div>
          <h3>Generated Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default Diagnosis;