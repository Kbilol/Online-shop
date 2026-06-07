import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import "flowbite";
import "flowbite/dist/flowbite.css";

import { AppRouter } from "./app/router/AppRouter.tsx";
import { ServerStateProvider } from "@common/api/tanstack.provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ServerStateProvider>
      <AppRouter />
    </ServerStateProvider>
  </StrictMode>,
);
