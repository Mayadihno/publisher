import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "aos/dist/aos.css";
import { AOSInit } from "./static/Aos.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { FaSpinner } from "react-icons/fa";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate
          loading={
            <div>
              <FaSpinner className="animate-spin" />
            </div>
          }
          persistor={persistor}
        >
          <AOSInit>
            <Toaster position="top-center" reverseOrder={false} />
            <App />
          </AOSInit>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
