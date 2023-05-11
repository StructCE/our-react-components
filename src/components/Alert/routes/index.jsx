/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AlertExample } from "../example";
import { AlertExample2 } from "../example2";

export function AlertRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AlertExample />} />
        <Route path="/2" element={<AlertExample2 />} />
      </Routes>
    </BrowserRouter>
  );
}
