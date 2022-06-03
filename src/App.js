import logo from './logo.svg';
import First from './First'
import Second from './Second';
import Posts from './components/posts';
import { Link } from "react-router-dom";

import './App.css';

function App() {
  const posts = [{"id": 1, "name": "test112222"}, {"id": 2, "name": "test23333333"}]
  const name= "testApp"
  return (
    <div className="App">
       <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <br />
          <li>
            <Link to="/api">API</Link>
          </li>
          <br />
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
        </ul>
      </nav>
      <br />
      <Posts posts={posts} name={name}/>
      
    </div>
  );
}

export default App;

