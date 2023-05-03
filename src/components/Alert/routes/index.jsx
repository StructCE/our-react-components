// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from "react-router-dom";
import { AlertExample } from "../example";
import { AlertExample2 } from "../example2";

export function AlertRoutes() {
  return (
    <Routes>
      <Route Component={AlertExample} path="/alertexample" />
      <Route Component={AlertExample2} path="/alertexample2" />
    </Routes>
  );
}
