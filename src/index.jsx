import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from 'react-dom/client';

import App from "./App";
import "./assets/scss/app.scss";

// import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById('root');  // Ensure this is the correct element

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);  // Create root with the valid DOM element
  root.render(<App />);
} else {
  console.error('Root element not found!');
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
