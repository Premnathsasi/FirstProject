import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";

// ReactDOM.render(
//   <AuthContextProvider>
//     <App />
//   </AuthContextProvider>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AuthContextProvider><App /></AuthContextProvider>);