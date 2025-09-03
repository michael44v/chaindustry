import React, { useState } from 'react';

function Switches() {
  const [activeIndex, setActiveIndex] = useState(0);

  const contents = [
    <div key="0">
      <h2>Content 1</h2>
      <p>This is the first content block.</p>
    </div>,
    <div key="1">
      <h2>Content 2</h2>
      <p>This is the second content block.</p>
    </div>,
    <div key="2">
      <h2>Content 3</h2>
      <p>This is the third content block.</p>
    </div>,
  ];

  return (
    <div>
      <div>
        {contents.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            style={{
              marginRight: '10px',
              padding: '8px 12px',
              backgroundColor: activeIndex === idx ? '#007bff' : '#e0e0e0',
              color: activeIndex === idx ? '#fff' : '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Show Content {idx + 1}
          </button>
        ))}
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          border: '1px solid #ccc',
          borderRadius: '6px',
        }}
      >
        {contents[activeIndex]}
      </div>
    </div>
  );
}

export default Switches;
