import * as React from 'react';
import TimeAgo from 'react-timeago';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';

function TodoItem({ description, createdAt, save }) {
  const [ isEdit, setIsEdit ] = React.useState(false);
  const [ text, setText ] = React.useState(false);

  const timeLabel = (
    <TimeAgo
      date={createdAt}
      minPeriod={5} />
  );

  let content;

  if (isEdit) {
    const handleChange = (event) => {
      setText(event.target.value);
    };

    const handleKeyDown=(e) => {
      if (e.key === "Enter") {
        save(text);
        setIsEdit(false);
      }
    };

    content = (
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown} />
    );
  } else {
    content = (
      <ListItemText primary={description} secondary={timeLabel} />
    );
  }

  const startEdit = () => {
    setText(description);
    setIsEdit(true);
  };

  return (
    <ListItem onClick={startEdit}>
      {content}
    </ListItem>
  );
}

export default TodoItem;
