import List from '@mui/material/List';
import TodoItem from './TodoItem';

function TodoList({ todos }) {

  const items = todos.map(i => (
    <TodoItem description={i.description} createdAt={i.createdAt} />
  ));

  return (
    <List>
      {items}
    </List>
  );
}

export default TodoList;
