import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Component/Home/HomePage";
import PropertyListing from "./Component/PropertyListing.js";
import PropertyDetailPage from "./Component/PropertyDetailPage.js";
import NotFoundPage from "./Component/NotFoundPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/New Listings"
          element={<PropertyListing PropertyName={"New Listings"} />}
        ></Route>
        <Route
          path="/Price reduced"
          element={<PropertyListing PropertyName={"Price reduced"} />}
        ></Route>
        <Route
          path="/New construction"
          element={<PropertyListing PropertyName={"New construction"} />}
        ></Route>
        <Route
          path="/Open houses"
          element={<PropertyListing PropertyName={"Open houses"} />}
        ></Route>
        <Route
          path="/Recently sold"
          element={<PropertyListing PropertyName={"Recently sold"} />}
        ></Route>
        <Route
          path="/New home communities"
          element={<PropertyListing PropertyName={"New home communities"} />}
        ></Route>
        <Route
          path="/Land"
          element={<PropertyListing PropertyName={"Land"} />}
        ></Route>
        <Route
          path="/Condos"
          element={<PropertyListing PropertyName={"Condos"} />}
        ></Route>
        <Route path="/detailes/:id" element={<PropertyDetailPage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
