import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Transcation from "./pages/Transcation/Transcation";
import Support from "./pages/Support/Support";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
      path: "/transcation",
      element: <Transcation/>,
    },
    {
      path: "/support",
      element: <Support/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <Dashboard /> */}
    </>
  );
}

export default App;
