
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import HomePage from "./pages/components/HomePage/HomePage.tsx";
import Contact from "./pages/components/Contact/Contact.tsx";
import InventoryApp from "./pages/components/InventoryApp/InventoryApp.tsx";
import InventoryItem from "./pages/components/InventoryItem/InventoryItem.tsx";
import NoPage from "./pages/nopage/NoPage.tsx";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="inventoryApp" element={<InventoryApp />} />
          <Route path="inventoryItem" element={<InventoryItem />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}