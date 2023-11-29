import List from '@mui/material/List';
import TodoItem from './TodoItem';

function TodoList({ todos, changeTodo }) {

  const items = todos.map(i => (
    <TodoItem
      key={i.id}
      description={i.description}
      createdAt={i.createdAt}
      save={(text) => changeTodo(i.id, text)}/>
  ));

  return (
    <List>
      {items}
    </List>
  );
}

export default TodoList;
