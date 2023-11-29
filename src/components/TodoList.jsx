import List from '@mui/material/List';
import TodoItem from './TodoItem';

function TodoList({ todos, changeTodo, removeTodo }) {

  const items = todos.map(i => (
    <TodoItem
      key={i.id}
      description={i.description}
      createdAt={i.createdAt}
      save={(text) => changeTodo(i.id, text)}
      remove={() => removeTodo(i.id)} />
  ));

  return (
    <List>
      {items}
    </List>
  );
}

export default TodoList;
