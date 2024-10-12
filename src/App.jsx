import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct import
import Header from "./components/Header";
import Home from "./pages/Home";
import { useSelector } from 'react-redux';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <>
    <div className={darkMode ? 'bg-dark' : 'bg-light'}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
