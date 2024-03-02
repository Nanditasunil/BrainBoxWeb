import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./comonents/Main";
import {Quiz} from "./comonents/Quiz";
import {Result} from "./comonents/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element: <Quiz></Quiz>,
  },
  {
    path: "/result",
    element: <Result></Result>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
