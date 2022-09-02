import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { AuthProvider } from "./context/auth";
import AuthRoute from "./utils/AuthRoute";
import GuestRoute from "./utils/guestRoute";



import login from "./pages/Login";
import register from "./pages/Register";
import home from "./pages/Home";
import post from "./pages/Post";
import addPost from "./pages/AddPost";


function App() {
  return (
      
    <AuthProvider>
    <Router>
 
      <AuthRoute exact path="/login" component={login} />
      <AuthRoute exact path="/register" component={register} />
      <Route exact path="/" component={home} />
      <Route exact path="/post:id" component={post} />
      <GuestRoute exact path="/add-post" component={addPost} />

    </Router>
  </AuthProvider>
  )
}

export default App