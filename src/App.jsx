import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/app-layout";
import Home from "./pages/home";
import Category from "./pages/category";
import Search from "./pages/search";
import GifPage from "./pages/single-gif";
import Favourites from "./pages/favourites";
import GifProvider from "./context/gif-context";

function App() {
  // homepage
  // categories
  // search
  // single gifs
  // favourites

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:category",
          element: <Category />,
        },
        {
          path: "/search/:query",
          element: <Search />,
        },
        {
          path: "/:type/:slug",
          element: <GifPage />,
        },
        {
          path: "/favourites",
          element: <Favourites />,
        },
      ],
    },
  ]);

  return (
    <>
      <GifProvider>
        <RouterProvider router={router} />
      </GifProvider>
    </>
  );
}

export default App;
