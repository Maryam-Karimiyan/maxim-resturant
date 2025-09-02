import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import theme from "./theme.js";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    {/* <CssBaseline/> */}
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
