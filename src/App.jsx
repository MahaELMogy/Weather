import "./App.css";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import News from "./News/News";

import Photos from "./Photos/Photos";
import Layout from "./Layout/Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "News", element: <News /> },
      { path: "Photos", element: <Photos /> },
      { path: "Contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
