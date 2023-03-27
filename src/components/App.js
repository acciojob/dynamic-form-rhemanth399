import React, { useState } from 'react';
//import './App.css';

function App() {
  const [fields, setFields] = useState([]);
  const [count, setCount] = useState(0);

  const addField = () => {
    setFields([...fields, { key: count }]);
    setCount(count + 1);
  };

  const deleteField = (key) => {
    setFields(fields.filter((field) => field.key !== key));
  };

  return (
    <div className='App'>
      {fields.length === 0 ? (
        <p>No fields in form.</p>
      ) : (
        fields.map((field) => (
          <div key={field.key}>
            <input type='text' name={`field-${field.key}`} />
            <button className='delete' onClick={() => deleteField(field.key)}>
              Delete
            </button>
          </div>
        ))
      )}
      <button className='add' onClick={addField}>
        Add field
      </button>
    </div>
  );
}

export default App;
