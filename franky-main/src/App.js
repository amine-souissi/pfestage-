import logo from './logo.svg';
import './App.css';
import SignIn from "./pages/signIn.js"
import Register from "./pages/register.js"
import FblikeWifiConnect from "./pages/fblikeWifiConnect.js"


import React from 'react';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}>
          <Route path="/Register" element={<Register />} />
          <Route path="/FblikeWifiConnect" element={<FblikeWifiConnect />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
