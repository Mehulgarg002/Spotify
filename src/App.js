import { Fragment } from "react";
import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom"; // Import Navigate
import PrivateRoute from "./PrivateRoute";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AudioPlayer from "./components/AudioPlayer";
import Playlist from "./pages/Playlist";
import Search from "./pages/Search";
import LikedSongs from "./pages/LikedSongs";
import Profile from "./pages/Profile";

const App = () => {
  const user = true; // Replace with your user authentication logic
  const location = useLocation();

  return (
    <Fragment>
      {user &&
        location.pathname !== "/login" &&
        location.pathname !== "/" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/not-found" && (
          <Fragment>
            <Navbar />
            <Sidebar />
            <AudioPlayer />
          </Fragment>
        )}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/home"
          element={
            <PrivateRoute user={user} element={<Home />} />
          }
        />
        <Route
          path="/collection/tracks"
          element={
            <PrivateRoute user={user} element={<LikedSongs />} />
          }
        />
        <Route
          path="/collection/playlists"
          element={
            <PrivateRoute user={user} element={<Library />} />
          }
        />
        <Route
          path="/search"
          element={
            <PrivateRoute user={user} element={<Search />} />
          }
        />
        <Route
          path="/playlist/:id"
          element={
            <PrivateRoute user={user} element={<Playlist />} />
          }
        />
        <Route
          path="/me"
          element={
            <PrivateRoute user={user} element={<Profile />} />
          }
        />
        {user && <Route path="/signup" element={<Navigate to="/home" replace={true} />} />} {/* Fix navigation */}
        {user && <Route path="/login" element={<Navigate to="/home" replace={true} />} />} {/* Fix navigation */}
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace={true} />} />
      </Routes>
    </Fragment>
  );
};

export default App;
