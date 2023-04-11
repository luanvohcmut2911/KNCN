import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import FilmList from "./page/FilmList";
import Film from "./page/Film";
import ErrorPage from "./page/Error";
import ActorList from "./page/ActorList";
import Actor from "./page/Actor";
import UserAccount from "./page/UserAccount";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import Search from "./page/Search";
import Registration from "./page/Registration";
import AuthProvider from "./Context/AuthProvider";
import SideBar from './components/SideBar';
import { Layout } from "antd";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Layout style={{ height: "100vh" }}>
            <SideBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/film" element={<FilmList />} />
              <Route path="/film/:id/:title" element={<Film />} />
              <Route path="/actor" element={<ActorList />} />
              <Route path="/actor/:id/:name" element={<Actor />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/search" element={<Search />} />
              <Route path="/account/:id" element={<UserAccount />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
