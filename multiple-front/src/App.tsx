import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import About from "./routes/About";
import SignUp from "./routes/SignUp";
import LogIn from "./routes/LogIn";
function App() {
  return (
    <section className="h-screen w-screen">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/logIn" element={<LogIn />}></Route>
      </Routes>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Pattarapol Tantechasa
          </p>
        </aside>
      </footer>
    </section>
  );
}

export default App;
