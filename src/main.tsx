import { Global, ThemeProvider } from "@emotion/react";
import { globalStyle } from "@styles/globalStyle";
import { theme } from "@styles/theme";
import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <Global styles={globalStyle} />
    <App />
  </ThemeProvider>,
);
