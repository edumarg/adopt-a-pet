import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Search from "./components/Search";
import Details from "./components/Details";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundaries";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <header>
        <Link to="/home" className="main-title">
          Adopt a Me!
        </Link>
      </header>
      <Routes>
        <Route path="/home" element={<Search />} />
        <Route
          path="/details/:id"
          element={
            <ErrorBoundary>
              <Details />{" "}
            </ErrorBoundary>
          }
        ></Route>
        <Route path="/not-found" element={<NotFound />} />
        <Route exact path="/" element={<Navigate replace to="/home" />} />
        <Route path="*" element={<Navigate replace to="/not-found" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
