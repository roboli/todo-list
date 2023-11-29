import * as React from 'react';
import TextField from '@mui/material/TextField';

function TodoInput({ text, setText, save }) {
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown=(e) => {
    if (e.key === "Enter") {
      save();
    }
  };

  return (
    <TextField
      id="standard-basic"
      label="Todo"
      variant="standard"
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown} />
  );
}

export default TodoInput;
