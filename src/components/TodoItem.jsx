import TimeAgo from 'react-timeago';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function TodoItem({ description, createdAt }) {
  const timeLabel = (
    <TimeAgo
      date={createdAt}
      minPeriod={60} />
  );

  return (
    <ListItem>
      <ListItemText primary={description} secondary={timeLabel} />
    </ListItem>
  );
}

export default TodoItem;
