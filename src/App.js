import Dashboard from "./pages/Dashboard.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";
import EventDetails from "./pages/EventDetails.jsx";
import AuthenticationRoute from "./components/AuthenticationRoute.jsx";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";

function App() {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  console.log("user", user);
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<AuthenticationRoute component={Dashboard} />}
        />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/create-event" element={<CreateEvent />} /> */}
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
