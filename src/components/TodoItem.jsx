import * as React from 'react';
import TimeAgo from 'react-timeago';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem({ description, createdAt, save, remove }) {
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

  const handleDelete = (e) => {
    e.preventDefault();
    remove();
  };

  return (
    <ListItem
      onClick={startEdit}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      }>
      {content}
    </ListItem>
  );
}

export default TodoItem;
