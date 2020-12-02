import logo from './logo.svg';
import './App.css';

function App() {
  const todos = ["Go to market", "Buy food", "Make dinner"];
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

export default App;
