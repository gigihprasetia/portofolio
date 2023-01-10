import "../styles/globals.css";
import "../styles/Home.module.css";
import Store from "../redux/Store";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
