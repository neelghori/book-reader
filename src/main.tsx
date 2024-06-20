import ReactDOM from "react-dom/client";
import "./index.css";
import Store from "./Context/Store.tsx";
import { Toaster } from "sonner";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Toaster richColors position="top-right" />
    <Store>
      <App />
    </Store>
  </BrowserRouter>
  // </React.StrictMode>
);
