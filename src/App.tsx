import './App.css';
import Office from './components/ducklings/Office';
import Countdown from './components/countdown/Countdown';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import MenuBar from './components/menuBar/MenuBar';

function App() {
  return (
      <Router>
        <Routes>
          <Route path={`/`} element={<MenuBar />} />
          <Route path={`/office`} element={<Office />} />
          <Route path={`/countdown`} element={<Countdown />} />
        </Routes>
      </Router>
  );
}

export default App;
