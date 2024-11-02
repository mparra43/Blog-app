import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { TransversalProvider } from "./feature/transversal";
import '@/styles/global.css'

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          {/* <Spinner /> */}
        </div>
      }
    >
      <TransversalProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TransversalProvider>
    </Suspense>
  );
}

export default App;
