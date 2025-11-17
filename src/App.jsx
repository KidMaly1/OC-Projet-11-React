import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Pages/SignIn/SignIn";

import { Routes, Route } from 'react-router-dom';
import User from "./Pages/User/User";
import Edit from "./Pages/Edit/Edit";
import Transaction from "./Pages/Transaction/Transaction";
import TestAPI from "./Components/TestAPI";
import SignInForm from "./Components/SignInForm/SignInForm";

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
      <Route path="/TestAPI" element={<TestAPI />} />
    </Routes>
    
    <Footer />
    

    </div>
  )
}

export default App
