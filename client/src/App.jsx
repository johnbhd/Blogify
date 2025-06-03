import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/auth/AuthPage';
import HomePage from './pages/main/HomePage';
import ViewPost from './pages/main/ViewPost';

function App() { 
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element= {<AuthPage />}/>
            <Route path="/Home" element= {<HomePage />}/>
            <Route path="/Blog/johndoe/Adventure-3242dfd" element= {<ViewPost />}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
