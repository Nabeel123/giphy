import { createContext, useContext, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

const GifContext = createContext();
// eslint-disable-next-line react/prop-types
const GifProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);
  const [filter, setFilter] = useState("gifs");
  const [favourites] = useState([]);

  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY);

  return (
    <GifContext.Provider
      value={{ gf, gifs, setGifs, filter, setFilter, favourites }}
    >
      {children}
    </GifContext.Provider>
  );
};

export const GifState = () => {
  return useContext(GifContext);
};
export default GifProvider;
