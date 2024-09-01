import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router.tsx";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import Loader from "./components/shared/Loader.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>  
    <PersistGate loading={null} persistor={persistor}>
      <Suspense fallback={<Loader/>}>
      <div className="font-poppins">
    <RouterProvider router={router}></RouterProvider>
      </div>
      </Suspense>
    </PersistGate>
    <Toaster></Toaster>
    </Provider>
  </StrictMode>
);
