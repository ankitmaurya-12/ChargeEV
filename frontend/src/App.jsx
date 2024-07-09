import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navigation from "./components/Navigation";
import { MainProvider } from "./context/MainContext";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import "./App.css";
import SingleStations from "./pages/SingleStations";
import Auth from "./pages/Auth";
import NotFound404 from "./pages/NotFound404";

import ContactUs from "./pages/ContactUs";

import Profile from "./components/Profile";
import DashBoard from "./pages/DashBoard";
import BookedStation from "./pages/SubPages/BookedStation";
import MyStation from "./pages/SubPages/MyStation";
import SlotBookedStation from "./pages/SlotBookedStation";
import Reviews from "./pages/SubPages/Reviews";
import News from './pages/News';


const theme = createTheme({
  palette: {
    primary: {
      main: "#f43f5e",
    },
    secondary: {
      main: "#a855f7",
    },
  },
});
function App() {
  return (
    <>
      <MainProvider>
        <ThemeProvider theme={theme}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about/" element={<About />} />
            <Route path="explore/" element={<Explore />} />
            <Route path="news/" element={<News />} />
            <Route path="contact-us/" element={<ContactUs />} />
            <Route path="login/" element={<Auth />} />
            <Route path="dashboard/" element={<DashBoard />}>
              <Route path="profile/" element={<Profile />} />
              <Route path="favouritestation/" element={<MyStation />} />
              <Route path="bookedstation/" element={<BookedStation />} />
              <Route path="reviews/" element={<Reviews />} />
            </Route>
            <Route path="station/:stationId" element={<SingleStations />} />
            <Route
              path="station/:stationId/booking"
              element={<SlotBookedStation />}
            />

            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </ThemeProvider>
      </MainProvider>
    </>
  );
}
export default App;
