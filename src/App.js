import Tutoring from './Tutoring';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div id="navigation">
          <Link to="/"></Link>
        </div>
        <div id="content">
          <Routes>
            <Route path="/" element={<Tutoring />}/>
          </Routes>
        </div>
    </Router>
  )
}

export default App;
