import * as React from 'react';
import TimeAgo from 'react-timeago';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

function TodoItem({ item, save, remove, done }) {
  const [ isEdit, setIsEdit ] = React.useState(false);
  const [ text, setText ] = React.useState(false);

  const { description, createdAt } = item;

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
    const handleCheck = (event) => {
      done(event.target.checked);
    };

    const startEdit = () => {
      setText(description);
      setIsEdit(true);
    };

    content = (
      <>
        <Checkbox
          edge="start"
          checked={item.done}
          onChange={handleCheck}
          tabIndex={-1}
          disableRipple
        />
        <ListItemText
          onClick={startEdit}
          primary={description}
          secondary={timeLabel} />
      </>
    );
  }

  const handleDelete = (e) => {
    e.preventDefault();
    remove();
  };

  return (
    <ListItem
      style={{ textDecoration : item.done ? 'line-through' : 'none' }} 
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
