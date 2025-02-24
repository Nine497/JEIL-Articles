import React, { useState } from 'react';

const AuthorsForm = () => {
  const [textBoxes, setTextBoxes] = useState([{ id: Date.now(), value: '' }]);

  const handleAddTextBox = () => {
    setTextBoxes([...textBoxes, { id: Date.now(), value: '' }]);
  };

  const handleRemoveTextBox = (id) => {
    setTextBoxes(textBoxes.filter(textBox => textBox.id !== id));
  };

  const handleChange = (id, value) => {
    setTextBoxes(textBoxes.map(textBox => 
      textBox.id === id ? { ...textBox, value } : textBox
    ));
  };

  return (
    <div className="p-5">
      <button
        onClick={handleAddTextBox}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        เพิ่มกล่องข้อความ
      </button>
      {textBoxes.map((textBox, index) => (
        <div key={textBox.id} className="mb-2 flex items-center">
          <input
            type="text"
            value={textBox.value}
            onChange={(e) => handleChange(textBox.id, e.target.value)}
            className="border border-gray-300 rounded-md p-2 mr-2 flex-1"
          />
          <button
            onClick={() => handleRemoveTextBox(textBox.id)}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            ลบ
          </button>
        </div>
      ))}
    </div>
  );
};

export default AuthorsForm;
