import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import FilmList from './page/FilmList';
import Film from './page/Film';
import ErrorPage from './page/Error';
import ActorList from './page/ActorList';
import Actor from './page/Actor';
import AuthProvider from './Context/AuthProvider';
import SideBar from './components/Sidebar';
import { Layout } from 'antd';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Layout style={{height: '100vh'}}>
            <SideBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/films' element={<FilmList />} />
              <Route path='/film/:id' element={<Film />} />
              <Route path='/actors' element={<ActorList />} />
              <Route path='/actor/:id' element={<Actor />} />
            </Routes>
          </Layout>
          
        </BrowserRouter>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
