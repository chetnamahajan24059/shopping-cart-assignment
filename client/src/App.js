import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import createStore from "./config/redux/store";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const store = createStore();
  return (
    <Provider store={store}>
      <Routes />
      <ToastContainer autoClose={7000} />
    </Provider>
  );
}

export default App;
