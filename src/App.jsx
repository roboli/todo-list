import * as React from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import './App.css';

function App() {
  const [ newTodo, setNewTodo ] = React.useState('');
  const [ todos, setTodos ] = React.useState([]);

  const addNewTodo = () => {
    const todo = {
      description: newTodo,
      createdAt: Date.now()
    };

    setTodos([todo].concat(todos));
    setNewTodo('');
  };

  return (
    <div className="App">
      <div className="App-content">
        <TodoInput
          text={newTodo}
          setText={setNewTodo}
          save={addNewTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
