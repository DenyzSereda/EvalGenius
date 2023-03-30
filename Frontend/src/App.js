import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tr>
            <th>Login:</th>
            <td><input type="text"></input></td>
          </tr>
          <tr>
            <th>Password:</th>
            <td><input type="password"></input></td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
