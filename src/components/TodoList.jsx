import List from '@mui/material/List';
import TodoItem from './TodoItem';

function TodoList({ todos, changeTodo, removeTodo, doneTodo }) {

  const items = todos.map(i => (
    <TodoItem
      key={i.id}
      item={i}
      save={(text) => changeTodo(i.id, text)}
      remove={() => removeTodo(i.id)}
      done={() => doneTodo(i.id)} />
  ));

  return (
    <List style={{ width: '20%' }}>
      {items}
    </List>
  );
}

export default TodoList;
