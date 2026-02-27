import { Routes, Route, HashRouter, } from "react-router-dom";
import { Footer } from "./componantes/Footer/Footer";
import { Home } from "./componantes/Main-pages/Home";
import { Nav } from "./componantes/navbar/nav";
import { Rooms_Grids } from "./componantes/Main-pages/Rooms_Grids";
import { Rooms_List } from "./componantes/Main-pages/Rooms_List";
import { About_us } from "./componantes/Main-pages/About_us";
import { Pricing } from "./componantes/Main-pages/Pricing";
import { Blog_Grid } from "./componantes/Main-pages/Blog_Grid";
import { Rooms_Details } from "./componantes/Main-pages/Rooms_Details";
import { Our_Services } from "./componantes/Main-pages/Our_Services";
import { Service_details } from "./componantes/Main-pages/Service_details";
import { Our_Team } from "./componantes/Main-pages/Our_Team";
import {Contact} from "./componantes/Main-pages/Contact";
import { Blog_standard } from "./componantes/Main-pages/Blog_standard";
import { Blog_Details } from "./componantes/Main-pages/Blog_Details";


export function App() {
  return (
    <>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Rooms_Grids" element={<Rooms_Grids />} />
          <Route path="/Rooms_List" element={<Rooms_List />} />
          <Route path="/Rooms_Details" element={<Rooms_Details />} />
          <Route path="/About_us" element={<About_us />} />
          <Route path="/Our_Services" element={<Our_Services />} />
          <Route path="/Service_details" element={<Service_details />} />
          <Route path="/Our_Team" element={<Our_Team />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Blog_standard" element={<Blog_standard />} />
          <Route path="/Blog_Grid" element={<Blog_Grid />} />
          <Route path="/Blog_Details" element={<Blog_Details/>}/>
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}
