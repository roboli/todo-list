import * as React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [ todos ] = React.useState([{
    description: 'Anything',
    createdAt: Date.now()
  }, {
    description: 'Something else',
    createdAt: Date.now()
  }]);

  return (
    <div className="App">
      <div className="App-content">
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
