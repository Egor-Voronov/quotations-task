import { Suspense } from "react";
import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routeConfig } from "@/shared/config/routeConfig.tsx";
import { Loader } from "@/shared/ui/Loader/Loader.tsx";

export const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<Suspense fallback={<Loader />}>{element}</Suspense>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
