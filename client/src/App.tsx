// import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Posts from './Posts';
import Home from './Home';
import PostPage from "./PostPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/posts">Posts</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/posts" element={<Posts/>} />
          <Route path="/post/:id" element={<PostPage/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
