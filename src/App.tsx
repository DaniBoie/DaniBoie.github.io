import './App.css';
import {Home} from './pages/Home';
import { ProjectPage } from './pages/ProjectPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
