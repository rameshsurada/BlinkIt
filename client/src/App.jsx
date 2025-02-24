import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import toast, { Toaster } from "react-hot-toast";
import { Outlet, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Toaster />
      <Header />

      <main className="min-h-[850vh]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default App;
