import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import AppErrorPage from "./pages/AppErrorPage";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ErrorBoundary fallback={<AppErrorPage />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
);
