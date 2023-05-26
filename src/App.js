import logo from "./logo.svg";
import "./App.css";
import Body from "./Components/Body";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Provider } from "react-redux";
import Store from "./Utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "./Components/Container";
import Watchpg from "./Components/Watchpg";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Container />,
        },
        {
          path: "/watch",
          element: <Watchpg />,
        },
        {
          path: "/videos",
          element: <Container />,
        },
      ],
    },
  ]);
  return (
    <Provider store={Store}>
      <div className="App bg-black ">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
