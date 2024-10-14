import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../lib/data";

export const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map((route) => 
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.page}
                />
            )}
        </Routes>
    );
};
