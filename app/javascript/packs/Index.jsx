import React from "react";

import App from "../components/App";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createRoot } from 'react-dom/client';

document.addEventListener("DOMContentLoaded", () => {
  createRoot(document.getElementById('content_render')).render(
    <App /> 
  );
});