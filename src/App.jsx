import * as React from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import './App.css';

function App() {
  const [ newTodo, setNewTodo ] = React.useState('');
  const [ todos, setTodos ] = React.useState([]);

  const addNewTodo = () => {
    if (newTodo) {
      const todo = {
        id: todos.length,
        description: newTodo,
        createdAt: Date.now()
      };

      setTodos([todo].concat(todos));
      setNewTodo('');
    }
  };

  const editTodo = (id, text) => {
    const cp = [...todos];

    const item = cp.find(i => i.id === id);
    item.description = text;

    setTodos(cp);
  };

  const removeTodo = (id) => {
    const cp = todos.filter(i => i.id !== id);
    setTodos(cp);
  };

  return (
    <div className="App">
      <div className="App-content">
        <TodoInput
          text={newTodo}
          setText={setNewTodo}
          save={addNewTodo} />
        <TodoList
          todos={todos}
          changeTodo={editTodo}
          removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
