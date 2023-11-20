import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import RegistrationForm from "./components/auth/RegistrationForm";
import ProductForm from "./components/products/ProductForm";
import ProductsList from "./components/products/ProductsList";
import ProductDetails from "./components/products/ProductDetails";
import Homepage from "./components/home/HomePage";
import { UserProvider } from "./components/auth/UserContext";
import PrivateRoute from "./components/auth/PrivateRoute";
import Navbar from "./components/home/Navbar"; // Import the Navbar component
import Messages from "./components/messages/Messages";

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/products" element={<ProductsList />} />
            <Route exact path="/products/details" element={<PrivateRoute />}>
              <Route
                exact
                path="/products/details"
                element={<ProductDetails />}
              />
            </Route>
            <Route exact path="/addproduct" element={<PrivateRoute />}>
              <Route exact path="/addproduct" element={<ProductForm />} />
            </Route>
            <Route path="/messages" element={<PrivateRoute />}>
              <Route index element={<Messages />} />
              <Route path=":chatId" element={<Messages />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
