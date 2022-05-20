import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Search from "./components/Search";
import Details from "./components/Details";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundaries";
import PetsContextProvider from "./context/PetsContext";
import PaginationContextProvider from "./context/PaginationContext";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
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
        <PetsContextProvider>
          <PaginationContextProvider>
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
          </PaginationContextProvider>
        </PetsContextProvider>
      </BrowserRouter>
      <footer>
        <p>
          Background from{" "}
          <a href="http://pets-images.dev-apis.com/pets/wallpaperB.jpg">
            pets-images.dev-apis.com
          </a>
        </p>
      </footer>
    </React.Fragment>
  );
}

export default App;
