import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/components/Login";

import Body from "../src/components/Body";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
