// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'antd/dist/reset.css'; // Ant Design styles (imported here or in main.tsx)
import Outline from './components/Navbar';
import Home from './components/Home';
import Login from './components/login';
import AboutPage from './components/AboutPage';
import MyCreations from './components/MyCreations';
// import TicTacToe from './components/game/tictactoe';
import Game from './components/game/game';

function App() {
  return (
    <Router>
      <Outline>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/creations" element={<MyCreations />} />
          <Route path="/game" element={<Game />} />
          {/* Add more routes as needed */}
          <Route path="*" element={
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h2>404 - Page Not Found</h2>
              <p>The page you are looking for does not exist.</p>
            </div>
          } />
        </Routes>
      </Outline>
    </Router>
  );
}

export default App;