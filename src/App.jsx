import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Events from "./components/event/Events";
import AddEvent from "./components/event/AddEvent";
import EditEvent from "./components/event/EditEvent";
import Header from "./components/shared/Header";
import { lazy } from "react";
import Guest from "./components/pages/Guest";

import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Guest />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/add" element={<AddEvent />} />
            <Route path="/events/edit/:id" element={<EditEvent />} />
          </Routes>
        </div>
      </Provider>
    </>
  );
}

export default App;
