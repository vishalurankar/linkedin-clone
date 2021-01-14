import React, { useEffect } from "react";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { auth } from "./firebase";
import Widget from "./Widget";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user s looged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
