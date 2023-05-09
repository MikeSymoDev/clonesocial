import './scss/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Registration from './pages/registration';
// import Error from './pages/Error';
import Posts from './pages/posts';
import Findfriends from './pages/findfriends';
import RequireAuth from './components/requireAuth';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/posts" element={<RequireAuth><Posts /></RequireAuth>} />
            <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path="/findfriends" element={<RequireAuth><Findfriends /></RequireAuth>} />
            {/* <Route path="/error" element={<Error />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
