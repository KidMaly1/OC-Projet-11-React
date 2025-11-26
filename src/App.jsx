import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Pages/SignIn/SignIn";
import { Routes, Route } from 'react-router-dom';
import User from "./Pages/User/User";
import Edit from "./Pages/Edit/Edit";
import Transaction from "./Pages/Transaction/Transaction";
import SignInForm from "./Components/SignInForm/SignInForm";
import ReduxTest from "./Components/ReduxTest";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


function App() {
  return (
    <div className="app-container">

    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignInForm" element={<SignInForm />} />
      <Route path="/User" element={<PrivateRoute><User /></PrivateRoute>} />
      <Route path="/Edit" element={<Edit />} />
      <Route path="/Transaction" element={<Transaction />} />
      <Route path="/ReduxTest" element={<ReduxTest />} />
    </Routes>
    
    <Footer />
    

    </div>
  )
}

export default App
