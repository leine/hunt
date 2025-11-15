import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/milk"
          element={
            <Navigate to="https://docs.google.com/document/d/12S9hJwDwl2EPgULtzcNXH1Md3ZmlgUZZwFwBNP9s5rY/edit?tab=t.0" />
          }
        />
        <Route
          path="/trail"
          element={
            <Navigate to="https://docs.google.com/document/d/1ZsjqTacf8YsemAin2ax9MWKevcmEro862-fkgyNhUSw/edit?usp=sharing&fbclid=IwY2xjawOFM-pleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwCGNhbGxzaXRlATcAAR7_9TbaxqMC4du5uq5v-D64YAr33MNI_31maU_SssYHHKk-7O_CNpeo0tFN6w_aem_tK9cR-yPuePafmtZtIxjuA" />
          }
        />
        <Route
          path="/concert"
          element={
            <Navigate to="https://docs.google.com/document/d/1CRmXPgvVcVzPqpneH06kGdKOYy_ZyjY_IFCswJb-CU4/edit?fbclid=IwY2xjawOFiudleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwCGNhbGxzaXRlATcAAR69XmmBla0SbjUfFtt5wyZnriBKqJbLtyqj8XpbnIS3NT9Ab8X1qLP9OmHvag_aem_U9feWx1aXf-0CTEF17hN3w&tab=t.0" />
          }
        />
        <Route
          path="/wave"
          element={
            <Navigate to="https://docs.google.com/document/d/1yQmy6NgThRuUmWmUAnnh-Nid96D189ml9VZYr7F66xE/edit?tab=t.0" />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
