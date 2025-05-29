import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/main/HomePage';

function App() { 
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element= {<AuthPage />}/>
            <Route path="/Home" element= {<HomePage />}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
