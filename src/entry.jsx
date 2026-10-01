import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./main.jsx";
import { basePath, locales } from "./site.js";

const root = document.getElementById("root");
const segments = window.location.pathname.replace(basePath, "").split("/").filter(Boolean);
const language = locales.includes(segments[0]) ? segments.shift() : "en";
const slug = segments[0] === "projects" ? segments[1] : "";
const app = <React.StrictMode><App language={language} slug={slug} /></React.StrictMode>;
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
