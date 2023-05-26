import { configureStore } from "@reduxjs/toolkit";
import Menu from "./Menu";
import Apidata from "./Apidata";

const Store = configureStore({
  reducer: {
    Menu: Menu,
    Apidata: Apidata,
  },
});

export default Store;
