  import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
  import AuthPage from './pages/auth/AuthPage';
  import HomePage from './pages/main/HomePage';
  import ViewPost from './pages/main/ViewPost';
  import CreatePost from './pages/main/CreatePost';
  import RoutesProtected from './components/RoutesProtected';
  import RedirectIfAuthenticated from './components/RedirectIfAuthenticated';

  function App() { 
    return (
      <>
        <BrowserRouter>
            <Routes>
              <Route 
                path="/" 
                element= {
                  <RedirectIfAuthenticated>
                    <AuthPage />
                  </RedirectIfAuthenticated>
                }
                />    
              <Route 
                path="/Home" 
                element= {
                  <RoutesProtected>
                    <HomePage />
                  </RoutesProtected>
                }/>
              <Route 
                path="/Blog/johndoe/Adventure-3242dfd" 
                element= {
                  <RoutesProtected>
                    <ViewPost />
                  </RoutesProtected>
                }/>
              <Route 
                path="/Blog/Create"
                element= {
                  <RoutesProtected>
                    <CreatePost />
                  </RoutesProtected>
                }/>

            <Route path="*" element={<Navigate to='/' replace />} />
            </Routes>
        </BrowserRouter>
      </>
    )
  }

  export default App
