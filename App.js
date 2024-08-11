import React, { useEffect } from "react";
import { Loader } from "./src/Helper";
import { AppLoader } from "./src/Component";
import { Provider } from "react-redux";
import RootComponent from "./src/Router/RootComponent";
import store from "./src/Store/store";
import SplashScreen from "react-native-splash-screen";
// import socketServcies from "./src/Helper/socketServcies";
export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  });


  return (
    <Provider store={store}>
      <AppLoader ref={(e) => Loader.setLoader(e)} />
      <RootComponent />
    </Provider>
  );
}