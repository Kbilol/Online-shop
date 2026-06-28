import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import "./i18n"; // ← обязательно

import "flowbite";
import "flowbite/dist/flowbite.css";

import { AppRouter } from "./app/router/AppRouter";
import { ServerStateProvider } from "@common/api/tanstack.provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ServerStateProvider>
      <AppRouter />
    </ServerStateProvider>
  </StrictMode>,
);