import { useState } from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { LoginForm } from "./Pages/Login/LoginForm";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { MatrixEffect } from "./MatrixEffect";

function App() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  return (
    <HashRouter>
      <MatrixEffect />
      {userEmail ? (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='*' element={<LoginForm onLogin={setUserEmail} />} />
        </Routes>
      )}
    </HashRouter>
  );
}

export default App;
