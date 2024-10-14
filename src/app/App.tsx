import { AppRouter } from "./router/ui/AppRouter";
import { Suspense } from "react";

export const App = () => {
    return (
        <Suspense fallback=''>
            <AppRouter />
        </Suspense>
    );
};
