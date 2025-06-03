// import React from "react";
// import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
// import AppRouter from "./router";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <AppRouter />
//   </React.StrictMode>
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import AppRouter from './router';
// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <AppRouter />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

import "bootstrap-icons/font/bootstrap-icons.css";



const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
} else {
  console.error('Root container missing in index.html');
}