import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import SignIn from "./Pages/SignIn";
import SignInForm from "./Components/SignInForm";
import { Routes, Route } from 'react-router-dom';
import User from "./Pages/User";
import Edit from "./Pages/Edit";
import Transaction from "./Pages/Transaction";

function App() {
  return (
    <div className="app-container">

    <Header />

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignInForm" element={<SignInForm />} />
      <Route path="/User" element={<User />} />
      <Route path="/Edit" element={<Edit />} />
      <Route path="/Transaction" element={<Transaction />} />
    </Routes>
    
    <Footer />
    

    </div>
  )
}

export default App
